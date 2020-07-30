<template>
    <div class="card">
        <div class="row">
            <div class="col s3 image">
                <img src="https://placehod.it/200x200" class="responsive-img" alt="" />
            </div>
            <div class="col s9 content">
                <ul>
                    <li class="left"><i class="material-icons left">business</i>ホテル名</li>
                    <li class="left"><i class="material-icons left">payment</i>1,000円〜</li>
                </ul>
                <p class="clearfix">プランの名前</p>
                <a href="#" class="btn btn-block blue">地図で確認する</a>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * プランの情報を表示する
     * 各表示に必要なプランの情報をcomputedを使って整形する
     * 「地図で確認する」ボタンがクリックされたら、イベントを実行するよう設定する
     */
    export default {
        props: {}
    }
</script>

<style scoped>
    .card .row {
        margin: 0 -0.75rem;
    }
    .card .row img.responsive-img {
        vertical-align: bottom;
        height: 100%;
        max-width: none;
    }
    .card .row .image {
        overflow: hidden;
    }
    .card .row .content {
        padding: 10px;
        padding-right: 25px;
    }
    .card .row ul {
        margin: 0;
        overflow: hidden;
    }
    .card .row ul li {
        margin-left: 10px;
    }
    .card .row ul li:first-child {
        margin-left: 0px;
    }
    .card .row ul i.left {
        margin-left: 8px;
    }

</style>