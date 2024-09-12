import fastify from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import { createGoalRoute } from './routes/create-goal'
import { createCompletionRoute } from './routes/create-completion'
import { getPendingGoalsRoute } from './routes/get-pending-goals'
import { getWeekSummaryRoute } from './routes/get-week-summary'
import fastifyCors from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()
const port = 3333

app.register(fastifyCors,{
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createCompletionRoute);
app.register(createGoalRoute);
app.register(getPendingGoalsRoute);
app.register(getWeekSummaryRoute);


app
  .listen({
    port,
  })
  .then((): void => {
    console.log(`Executando o servidor no endereço http://localhost:${port}`)
  })
