/**
 * シンプルにデータを取り扱えるようにするため、
 * Planモデルを作成し、プロパティーを管理する
 */
export default class Plans {
    constructor (rakutenPlan = {}) {
        const { hotelBasicInfo } = rakutenPlan.hotel[0]
        const { roomBasicInfo } = rakutenPlan.hotel[1].roomInfo[0]
        this.id = hotelBasicInfo.hotelNo
        this.hotelName = hotelBasicInfo.hotelName
        this.planName = roomBasicInfo.planName
        this.imageUrl = hotelBasicInfo.hotelThumbnailUrl
        this.center = { lat: hotelBasicInfo.latitude, lng: hotelBasicInfo.longitude }
        this.minCharge = hotelBasicInfo.hotelMinCharge
    }
}