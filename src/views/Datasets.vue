<template>
  <div class="container">
    <div class="search-box">
      <el-input
        placeholder="搜索数据集"
        v-model="input"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
    </div>

    <el-card
      class="limit"
      shadow="never"
    >
      <div slot="header">
        <span>筛选</span>
      </div>
      <el-collapse-transition>
        <div style="padding: 8px 0">
          <el-checkbox-group v-model="clusterFields.checkList">
            <el-checkbox
              v-for="(item, i) in clusterFields.data"
              :label="item"
              :key="i"
            >{{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </el-collapse-transition>
    </el-card>
    <p style="  margin-left: 400px; ">共找到1234条数据集</p>
    <div
      class="card"
      v-for="(item,index) in resultList "
      :key="index"
    >
      <router-link to="/datadetails">
        <div class="title">{{item.title}}</div>
      </router-link>
      <div class="info">{{item.info}}</div>
      <div class="num">{{item.num}}次实验</div>
      <el-divider></el-divider>
    </div>

    <div class="result"></div>
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
          title: 'CORD-19',
          info: 'CORD-19 is a free resource of tens of thousands of scholarly articles about COVID-19, SARS-CoV-2, and related coronaviruses for use by the global research community.',
          num: 32,
        },
        {
          title: 'CORD-19',
          info: 'CORD-19 is a free resource of tens of thousands of scholarly articles about COVID-19, SARS-CoV-2, and related coronaviruses for use by the global research community.',
          num: 32,
        },
        {
          title: 'CORD-19',
          info: 'CORD-19 is a free resource of tens of thousands of scholarly articles about COVID-19, SARS-CoV-2, and related coronaviruses for use by the global research community.',
          num: 32,
        },
      ],
      clusterFields: {
        data: ['图像', '文本', '医疗'],
        checkList: [],
      }
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
  padding: 40px 80px;
}
.search-box {
  width: 500px;
  margin-bottom: 40px;
}
.card {
  margin-left: 400px;
  margin-right: 80px;
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
  line-height: 18px;
  font-size: 14px;
  color: #777;
}

.limit {
  float: left;
  width: 300px;
}

.el-card {
  border: 1px solid #999;
}

a {
  text-decoration: inherit;
}
</style>