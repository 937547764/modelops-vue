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

    <div class="title">{{title}}</div>
    <div class="info">{{info}}</div>

    <div class="tabs">

      <el-tabs v-model="activeName">
        <el-tab-pane
          label="模型详情"
          name="first"
        >
          <el-input
            type="textarea"
            :autosize="{ minRows: 2}"
            placeholder="请输入介绍"
            v-model="textarea"
          >
          </el-input>

          <div class="code">

            <el-button plain>下载</el-button>
            <el-button plain>克隆</el-button>

            <el-descriptions
              direction="vertical"
              :column="1"
              border
            >
              <el-descriptions-item label="代码">main.py</el-descriptions-item>
            </el-descriptions>
          </div>

          <el-table
            border
            :data="tableData"
            style="width: 200px;float:left"
            :header-cell-style="{background:'#fafafa'}"
          >
            <el-table-column
              prop="data"
              label="模型依赖"
            >
            </el-table-column>

          </el-table>

          <el-card shadow="never">
            <p>模型参数</p>

            <el-table
              border
              style="width: 100%"
            >
              <el-table-column
                label="名称"
                width="100"
              >
              </el-table-column>
              <el-table-column label="描述">
              </el-table-column>
              <el-table-column
                label="类型"
                width="180"
              >
              </el-table-column>
              <el-table-column
                label="默认值"
                width="180"
              >
              </el-table-column>

            </el-table>
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
      input: '',

      title: 'mlr.classif.xgboost',
      info: 'Description of mlr.classif.xgboost',
      activeName: 'first',
      textarea: '',
      tableData: [{ data: "xgboost   0.6.4" },
      { data: "OpenML  1.3" },
      { data: "mlr  2.11" }]

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

.tabs {
  margin-top: 30px;
  margin-right: 200px;
}

.el-card {
  margin-top: 20px;
  border: 1px solid #c0c4cc;
  margin-left: 250px;
}

.code {
  margin-top: 20px;
}

.el-descriptions {
  margin-top: 20px;
}

.el-table {
  margin-top: 20px;
}
</style>