<template>
  <div class="container">

    <div class="title">{{detail.name}}</div>
    <div class="info">{{detail.short_description}}</div>

    <div class="tabs">

      <el-tabs v-model="activeName">
        <el-tab-pane
          label="数据集详情"
          name="first"
        >
          <mavon-editor
            class='md'
            v-model="detail.long_description"
            defaultOpen="preview"
            :subfield="false"
            :editable="false"
            :toolbarsFlag="false"
            :shortCut="false"
            :boxShadow="false"
          />

          <el-card shadow="never">
            <div
              slot="header"
              class="card-title"
            >
              <span>数据集预览</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                icon="el-icon-download"
                @click="Download"
              >下载数据集</el-button>
            </div>
            <json-viewer :value="JSON.parse(this.detail.sample)"></json-viewer>
          </el-card>

        </el-tab-pane>

        <el-tab-pane
          label="实验"
          name="second"
        >

          <div v-if="detail.experiment_times==0"> 暂无相关实验 </div>

          <el-table
            v-else
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
              label="模型"
            >
            </el-table-column>
          </el-table>

        </el-tab-pane>
      </el-tabs>

    </div>

  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import JsonViewer from 'vue-json-viewer';

export default {

  components: {
    mavonEditor,
    JsonViewer
  },

  data() {
    return {
      id: undefined,
      detail: {
        owner: "zpn",
        "name": "bank",
        "task": "命名实体识别",
        "area": "新闻",
        "short_description": "开源的bank 命名实体识别 数据集",
        "long_description": "## 数据集描述\n该数据集为开源数据集,由管理员上传,可以支持各类NER模型\n## 数据集信息\n- 数据量: 1000\n- 数据格式: json\n- 数据类别: 5\n- 数据来源: 开源数据集",
        "sample": "[{\"text\": \"交行14年用过，半年准备提额，却直接被降到1Ｋ，半年期间只T过一次三千，其它全部真实消费，第六个月的时候为了增加评分提额，还特意分期两万，但降额后电话投诉，申请提...\", \"labels\": [\"B-BANK\", \"I-BANK\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"B-COMMENTS_N\", \"I-COMMENTS_N\", \"O\", \"O\", \"O\", \"O\", \"O\", \"B-COMMENTS_ADJ\", \"I-COMMENTS_ADJ\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"B-COMMENTS_N\", \"I-COMMENTS_N\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"B-COMMENTS_N\", \"I-COMMENTS_N\", \"O\", \"O\", \"B-COMMENTS_N\", \"I-COMMENTS_N\", \"O\", \"O\", \"O\", \"O\", \"B-PRODUCT\", \"I-PRODUCT\", \"O\", \"O\", \"O\", \"O\", \"B-COMMENTS_ADJ\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"]}, {\"text\": \"单标我有了，最近visa双标返现活动好\", \"labels\": [\"B-PRODUCT\", \"I-PRODUCT\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"B-PRODUCT\", \"I-PRODUCT\", \"I-PRODUCT\", \"I-PRODUCT\", \"B-PRODUCT\", \"I-PRODUCT\", \"B-COMMENTS_N\", \"I-COMMENTS_N\", \"I-COMMENTS_N\", \"I-COMMENTS_N\", \"B-COMMENTS_ADJ\"]}, {\"text\": \"建设银行提额很慢的……\", \"labels\": [\"B-BANK\", \"I-BANK\", \"I-BANK\", \"I-BANK\", \"B-COMMENTS_N\", \"I-COMMENTS_N\", \"B-COMMENTS_ADJ\", \"I-COMMENTS_ADJ\", \"O\", \"O\", \"O\"]}]",
        "data_source": "",
        "created": "2023-01-16T19:46:57.975103",
        "experiment_times": 0,
        "train_data": "http://cc.qk0.cc:8001/datasets/4/home/zpn/modelops/modelops-backend/static/%E5%91%BD%E5%90%8D%E5%AE%9E%E4%BD%93%E8%AF%86%E5%88%AB/%E6%96%B0%E9%97%BB/bank/bank_m8oMc61.json",
        "train_data_path": "/home/zpn/modelops/modelops-backend/static/命名实体识别/新闻/bank/bank_m8oMc61.json",
        "download_url": "http://cc.qk0.cc:8001/static/命名实体识别/新闻/bank/bank_m8oMc61.json"
      },

      activeName: 'first',
    }
  },

  created() {
    const id = this.$route.params.id
    this.id = id
    this.get_datasets(id)
  },


  mounted() {
  },

  methods: {
    change(value, render) {
      this.html = render;
    },

    get_datasets(id) {
      this.$http({
        url: "/datasets/" + id + '/',
        method: "get",
      }).then((res) => {
        let data = res.data
        this.detail = data
      })
    },

    Download() {
      window.open("/api/datasets/" + this.id + '/download/')
    },
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
}

.el-card {
  margin-top: 20px;
}

.v-note-wrapper {
  z-index: 1 !important;
}

.md {
  margin-bottom: 30px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #555;
}
</style>

<style>
.md .v-show-content {
  background-color: #fff !important;
}
</style>