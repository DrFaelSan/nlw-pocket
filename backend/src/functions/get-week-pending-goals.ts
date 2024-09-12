import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'
import { and, gte, lte, count, eq, sql } from 'drizzle-orm'
import { firtDayOfWeek, lastDayOfWeek } from '../common/days'

export async function getWeekPendingGoals() {
  const goalsCreateUpToWeek = db.$with('goals_created_up_to_week').as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(lte(goals.createdAt, lastDayOfWeek))
  )

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db
      .select({
        goalId: goalCompletions.goalId,
        completionCount: count(goalCompletions.id).mapWith(Number).as('completionCount'),
      })
      .from(goalCompletions)
      .where(and(gte(goalCompletions.createdAt, firtDayOfWeek), lte(goalCompletions.createdAt, lastDayOfWeek)))
      .groupBy(goalCompletions.goalId)
  )

  const pendingGoals = await db
    .with(goalsCreateUpToWeek, goalCompletionCounts)
    .select({
      id: goalsCreateUpToWeek.id,
      title: goalsCreateUpToWeek.title,
      desiredWeeklyFrequency: goalsCreateUpToWeek.desiredWeeklyFrequency,
      completionCount: sql /*sql*/`
        COALESCE(${goalCompletionCounts.completionCount},0)
      `
        .mapWith(Number)
        .as('completionCount'),
    })
    .from(goalsCreateUpToWeek)
    .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalId, goalsCreateUpToWeek.id))

  return {
    pendingGoals,
  }
}
