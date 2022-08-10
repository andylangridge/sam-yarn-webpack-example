import { APIGatewayProxyResult } from 'aws-lambda'
import { message } from '../../lib/message'

export const handler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    })
  }
}
