<template>
  <div class="container">
    <div class="search-box">
      <el-input
        placeholder="搜索模型"
        v-model="input"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
    </div>
    <p style=" ">共找到1234个模型</p>

    <div
      class="card"
      v-for="(item,index) in resultList "
      :key="index"
    >
      <router-link to="/modeldetails">
        <div class="title">{{item.title}}</div>
      </router-link>
      <div class="info">{{item.info}}</div>
      <div class="num">{{item.num}}次实验 <span style="padding-left:20px"></span>
        <i class="el-icon-time"></i>
        {{item.date}} by {{item.user}}
      </div>
      <el-divider></el-divider>
    </div>

  </div>
</template>

<script>
export default {

  components: {

  },

  data() {
    return {
      input: '',
      resultList: [
        {
          title: 'mlr.classif.xgboost',
          info: 'Description of mlr.classif.xgboost',
          num: 32,
          date: '2021-06-21 23:58:07',
          user: 'Zhang San'
        }, {
          title: 'mlr.classif.xgboost',
          info: 'Description of mlr.classif.xgboost',
          num: 32,
          date: '2021-06-21 23:58:07',
          user: 'Zhang San'
        }, {
          title: 'mlr.classif.xgboost',
          info: 'Description of mlr.classif.xgboost',
          num: 32,
          date: '2021-06-21 23:58:07',
          user: 'Zhang San'
        },]

    }
  },

  created() {

  },


  mounted() {
  },

  methods: {
  }

}
</script>

<style  scoped>
.container {
  padding: 40px 180px;
}
.search-box {
  width: 500px;
  margin-bottom: 40px;
}
.card {
  margin-right: 200px;
}
.title {
  cursor: pointer;
  font-size: 24px;
  font-family: SimHei-Normal;
  font-weight: normal;
  text-align: LEFT;
  color: #5194e9;
  line-height: 30px;
}

.info {
  margin-top: 9px;
  line-height: 24px;
  font-size: 15px;
  color: #555;
  letter-spacing: 0.5px;
  font-family: Arial, "Microsoft yehei";
  text-justify: inter-word;
  text-align: justify;
}

.num {
  font-weight: bold;
  margin-top: 9px;
  line-height: 20px;
  font-size: 14px;
  color: #777;
}

a {
  text-decoration: inherit;
}
</style>