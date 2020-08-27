<template>
    <div id="searchBox" ref="searchBox">
        <form class="row" id="search">
            <div class="col s6 input-field">
                <input type="text" name="checkinDate" id="date1" class="datepicker">
                <label for="date1">チェックイン日</label>
            </div>

            <div class="col s6 input-field">
                <input type="text" name="checkoutDate" id="date2" class="datepicker">
                <label for="date2">チェックアウト日</label>
            </div>

            <div class="col s12 input-field">
                <input type="number" name="adultNum" id="adult_num">
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
        name: 'SearchForm'
        mounted() {
            // カレンダーUIを有効化する
            // ref="searchBox"が指定されいるDOMを取得し、
            // その中にある.datepickerのDOMを指定する
            const datepikcers = this.$refs.searchBox.querySelectorAll('.datepicker')
            M.Datepicker.init(datepikcers, {})
        }
    }
</script>