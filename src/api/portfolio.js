
import { ptflos } from './index'

function createNewPortfolio(data) {
	return ptflos.post('/', data)
}

function getPortfolioData() {
	return ptflos.get('/')
}

export {
  createNewPortfolio,
  getPortfolioData
}