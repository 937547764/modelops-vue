<template>
  <div class="container">
    <div class="search-box">
      <el-input
        placeholder="搜索实验"
        v-model="input"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-input>
    </div>
    <p style=" ">共找到1234个实验</p>

    <el-button plain>比较</el-button>
    <el-button plain>导出csv文件</el-button>

    <div class='r-buttons'>
      <router-link to="/new_experiment">
        <el-button
          plain
          style=" margin-right: 20px;"
        >新建实验</el-button>
      </router-link>
      <el-button plain>在线运行</el-button>
    </div>

    <el-table
      border
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
        width="200"
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
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="实验"
      >
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {

  components: {

  },

  data() {
    return {
      input: '',


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
.el-table {
  margin-top: 20px;
}

.r-buttons {
  float: right;
}

a {
  text-decoration: inherit;
}
</style>