<template>
  <div id="app">
    <nav class="blue navbar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center"><i class="material-icons left" >room</i></a>
      </div>
    </nav>

    <!--   #mapエリアを以下に設定する   -->
    <plan-map />


    <div class="side-area">
      <div class="side-area-inner">

        <div class="row">
          <div class="col s12">
            <!--   #検索フォームを以下に設定する   -->
            <search-form />
          </div>
        </div>

        <div class="row">
          <div class="col s12" id="results-wrap">
            <!--   #プラン一覧を以下に設定する   -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PlanMap from './components/PlanMap.vue'
  import SearchForm from './components/SearchForm.vue'
  /**
   * 各種コンポーネントを読み込み、それぞれにデータを受け渡す
   * また、各コンポーネントで発生したイベントを受け取り、状態を変更する
   * 楽天APIにアクセスし、データを取得する処理を行い、data.plansに保存する
   */
  export default {
    name: 'App',
    components: { PlanMap, SearchForm }
  }
</script>

<style>
  .navbar {
    position: relative;
    z-index: 10;
  }

  .main-area,
  .side-area {
    position: fixed;
    width: 70%;
    height: 100%;
    background: #fff;
    right: 0;
    top: 50px;
    overflow-y: scroll;
  }

  .side-area {
    width: 30%;
    min-width: 400px;
    right: auto;
    left: 0;
    border-right: 1px solid #ccc;
  }

  .main-area-inner,
  .side-area-inner {
    padding-top: 64px;
  }
</style>
