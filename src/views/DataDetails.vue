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

    <div class="title">{{title}}</div>
    <div class="info">{{info}}</div>

    <div class="tabs">

      <el-tabs v-model="activeName">
        <el-tab-pane
          label="数据集详情"
          name="first"
        >
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            placeholder="请输入介绍"
            v-model="textarea"
          >
          </el-input>

          <el-card shadow="never">
            <span>cord-19.csv</span>
            <el-button
              type="text"
              icon="el-icon-download"
            ></el-button>

            <template>
              <el-table
                border
                style="width: 100%"
              >
                <el-table-column
                  label="索引"
                  width="100"
                >
                </el-table-column>
                <el-table-column label="列名">
                </el-table-column>
                <el-table-column
                  label="类型"
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  label="缺失值"
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  label="最大值"
                  width="120"
                >
                </el-table-column>
                <el-table-column
                  label="最小值"
                  width="120"
                >
                </el-table-column>
              </el-table>
            </template>
          </el-card>

          <el-card shadow="never">
            在线编程
          </el-card>

        </el-tab-pane>

        <el-tab-pane
          label="实验"
          name="second"
        >

          <el-table
            tooltip-effect="dark"
            style="width: 100%"
          >
            <el-table-column
              type="selection"
              width="55"
            >
            </el-table-column>
            <el-table-column
              label="开始时间"
              width="120"
            >
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="状态"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="名称"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="用户"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="实验"
            >
            </el-table-column>
          </el-table>

        </el-tab-pane>
      </el-tabs>

    </div>

  </div>
</template>

<script>
export default {

  components: {

  },

  data() {
    return {
      title: 'CORD-19',
      info: 'CORD-19 is a free resource of tens of thousands of scholarly articles about COVID-19, SARS-CoV-2, and related coronaviruses for use by the global research community.',
      activeName: 'first',
      textarea: ''

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
  margin-right: 200px;
  line-height: 24px;
  font-size: 15px;
  color: #555;
  letter-spacing: 0.5px;
  font-family: Arial, "Microsoft yehei";
  text-justify: inter-word;
  text-align: justify;
}

.tabs {
  margin-top: 30px;
  margin-right: 200px;
}

.el-card {
  margin-top: 20px;
  border: 1px solid #c0c4cc;
}
</style>