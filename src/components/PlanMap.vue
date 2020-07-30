<template>
    <div class="main-area">
        <div class="main-area-inner">
            <div id="map" ref="map"></div>
        </div>
    </div>
</template>

<script>
    /* global google */
    /**
     * 画面上に表示された際に、Googleマップを表示する処理を行う
     * マップの中心がユーザーの操作によって変わった場合に発生するイベントを取得し、
     * アプリケーションの中心位置の情報を更新する
     * 取得されている宿泊プランのホテルの位置をマーカーで示す
     * propsで渡されるプラン及びセンターの情報を監視し、変更があれば適宜マーカーの設定やマップの位置を変更する
     */
    export default {
        name: 'PlanMap',
        props: {},
        data () {},
        mounted() {
            new google.maps.Map(this.$refs.map, {
                center: { lat: 34.7024898,lng: 135.4937619 },
                zoom: 13
            })
        }
    }

</script>

<style>
    #map {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #ccc;
    }
</style>