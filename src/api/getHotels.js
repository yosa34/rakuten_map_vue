import axios from 'axios'
/**
 * ホテルの取得APIに接続するメソッドを定義する
 * ホテルへの接続は、axiosを使って実装する
 */
export default function (params = {}) {
    axios.get(
        'https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426',
        {
            params: {
                ...params,
                datumType: 1,
                applicationId: process.env.VUE_APP_APP_ID
            }
        }
        )
}