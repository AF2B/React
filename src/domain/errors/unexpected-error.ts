export class UnexpectedError extends Error {
  constructor () {
    super('Erro interno do servidor, tente novamente em alguns instantes.')
    this.name = 'UnexpectedError'
  }
}
