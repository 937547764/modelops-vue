<template>
  <div class="container">
    <el-row :gutter="60">
      <el-col :span="13">
        <el-card
          class="new-card"
          shadow="never"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>新建实验</span>
            <el-button
              style="float: right; padding:5px 10px;color:#000"
              plain
            >运行</el-button>
          </div>
          <div class="card-item">
            <h3>数据</h3>
            <el-divider></el-divider>
            <div class="model">
              <h3>模型</h3>
            </div>

          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card
          class="new-card"
          shadow="never"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>选择模型</span>
          </div>
          <div class="card-item">
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

            <p class='text'>我的模型</p>
            <el-card
              shadow="never"
              class="my"
            >
              <div class="title">{{title}}</div>
              <div class="info">{{info}}</div>
            </el-card>

            <el-card
              shadow="never"
              class="my"
            >
              <div class="title">{{title}}</div>
              <div class="info">{{info}}</div>
            </el-card>

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

  components: {

  },

  data() {
    return {
      title: 'mlr.classif.xgboost',
      info: 'Description of mlr.classif.xgboost',

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
  padding: 30px 80px;
}

.new-card >>> .el-card__header {
  background-color: #2b354b;
  height: 50px;
  color: #fff;
  text-align: center;
  padding: 14px;
  font-size: 17px;
}

.new-card.el-card {
  min-height: 80vh;
}

.text {
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.el-card {
  border: 1px solid #c0c4cc;
  margin-top: 20px;
}

.title {
  cursor: pointer;
  font-size: 16px;
  font-family: SimHei-Normal;
  font-weight: normal;
  text-align: LEFT;
  color: #5194e9;
  line-height: 30px;
}

.info {
  margin-top: 9px;
  line-height: 24px;
  font-size: 14px;
  color: #555;
  letter-spacing: 0.5px;
  font-family: Arial, "Microsoft yehei";
  text-justify: inter-word;
  text-align: justify;
}

.my >>> .el-card__body {
  padding: 12px;
}

.model {
  vertical-align: middle;
  height: 60vh;
  display: table-cell;
}
</style>


