import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { addReserveSuccess, updateAmountSuccess } from './actions'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import history from '../../../services/history'

console.log('teste1')
function* addToReserve({ id }) {
    const tripExists = yield select((state) =>
        state.reserve.find((trip) => trip.id === id)
        
    )

    const myStock = yield call(api.get, `/stock/${id}`)

    const stockAmount = myStock.data.amount

    const currentStock = tripExists ? tripExists.amount : 0

    const amount = currentStock + 1
    console.log('teste2')
    if (amount > stockAmount) {
        toast.error('Quantidade máxima atingida')
        return
    }

    console.log('teste3')

    if (tripExists) {
        yield put(updateAmountSuccess(id, amount))
    } else {
        const response = yield call(api.get, `trips/${id}`)

        const data = {
            ...response.data,
            amount: 1,
        }

        console.log('teste4')

        yield put(addReserveSuccess(data))
        history.push('/reservas')
        console.log('teste5')
    }
}



function* updateAmount({ id, amount }) {
    if (amount <= 0) return

    const myStock = yield call(api.get, `/stock/${id}`)

    const stockAmount = myStock.data.amount

    if (amount > stockAmount) {
        toast.error('Quantidade máxima atingida')
        return
    }

    yield put(updateAmountSuccess(id, amount))
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
])

console.log('teste6')
