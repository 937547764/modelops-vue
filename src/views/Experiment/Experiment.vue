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
      :data="tableData"
      :header-cell-style="{
        'font-size': '14px',
        color: '#778192',
        'font-weight': 'normal',
        'text-align': 'center',
        'background-color': '#F5F7FA',
        padding: '0',
        height: '2.5vw',
      }"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="开始时间"
        width="160"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="tag"
        label="状态"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '未发布' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop="user"
        label="用户"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="model"
        label="模型"
      >
      </el-table-column>
      <el-table-column
        prop="data"
        label="数据集"
      >
      </el-table-column>

      <el-table-column type="expand">
        <template slot-scope="props">
          {{ props.row.param }}
        </template>
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
      tableData: [{
        date: '2023-01-01  10:10',
        tag: '未发布',
        name: '第一次实验测试',
        user: '张三',
        model: '高性能通用检测模型',
        data: 'COCO通用分割推理数据库'
      },
      {
        date: '2023-01-01  10:11',
        tag: '已发布',
        name: '第二次实验测试',
        user: '张三',
        model: '高性能通用检测模型',
        data: 'COCO通用分割推理数据库'
      },
      ]



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
  padding: 40px 100px;
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