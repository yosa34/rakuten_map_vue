<template>
    <div id="searchBox" ref="searchBox">
        <form class="row" id="search" @submit.prevent="submit">
            <div class="col s6 input-field">
                <input type="text" name="checkinDate" @change="changeCheckinDate" id="date1" class="datepicker">
                <label for="date1">チェックイン日</label>
            </div>

            <div class="col s6 input-field">
                <input type="text" name="checkoutDate" @change="changeCheckoutDate" id="date2" class="datepicker">
                <label for="date2">チェックアウト日</label>
            </div>

            <div class="col s12 input-field">
                <input type="number" v-model.number="conditions.adultNum" name="adultNum" id="adult_num">
                <label for="adult_num">大人人数</label>
            </div>
            <div class="col s12 l6 offset-l3">
                <button type="submit" class="btn btn-block blue" style="width: 100%;"><i class="material-icons left">search</i>検索する</button>
            </div>
        </form>
    </div>
</template>


<script>
    /**
     * 画面上に表示した際に、materialize-cssのdatepickerを有効にし、
     * 日付選択画面UIを表示できるように設定する
     * https://materializecss.com/pickers.html
     *
     * 検索ボタンが押下されたときに、イベントを実行する
     * イベントの購読者に対して、入力されているフォームの項目を渡す
     *
     */
    /* global M */
    export default {
        name: 'SearchForm',
        props: {
            conditions: {
                type: Object,
                required: true
            }
        },
        mounted() {
            // カレンダーUIを有効化する
            // ref="searchBox"が指定されいるDOMを取得し、
            // その中にある.datepickerのDOMを指定する
            // check(in|out)DateのDOMをそれぞれ取得し、各DOM毎にDatepickerを初期化する
            // その際に、それぞれに対応したプロパティーをonSelectで操作するように記述する
            const inDate = this.$refs.searchBox.querySelectorAll('#date1')
            const outDate = this.$refs.searchBox.querySelectorAll('#date2')
            const format = 'yyyy-mm-dd'
            M.Datepicker.init(inDate, {
                format,
            })
            M.Datepicker.init(outDate, {
                format,
            })
        },
        methods: { 
            changeCheckinDate(evt) {
                this.conditions.checkinDate = evt.target.value
            },
            changeCheckoutDate(evt) {
                this.conditions.checkoutDate = evt.target.value
            },
            submit() {
                this.$emit('search', this.conditions)
            }
        }
    }
</script>