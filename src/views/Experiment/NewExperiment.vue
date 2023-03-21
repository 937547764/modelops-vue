<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card
          class="new-card"
          shadow="never"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <span>选择数据集</span>
          </div>
          <div class="card-item">
            <div class="search-box">
              <el-input
                placeholder="搜索数据集"
                v-model="input[0]"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="search_data"
                ></el-button>
              </el-input>
            </div>
            <el-card
              shadow="never"
              class="my"
              v-for="(item,index) in data_list "
              :key="index"
            >
              <span
                class="title"
                @click="toDataset(item.id)"
              >{{item.name}}</span>
              <span
                class="choose"
                @click="data_selected = item"
              >选择</span>
              <div class="info">{{item.short_description}}</div>
            </el-card>

          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
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
              @click="create_exp"
            >运行</el-button>
          </div>
          <div class="card-item">
            <p class="text">数据</p>
            <el-card
              shadow="never"
              class="my"
              v-if="data_selected"
            >
              <div class="title">{{data_selected.name}}</div>
              <div class="info">{{data_selected.short_description}}</div>
            </el-card>
            <el-divider></el-divider>
            <div>
              <p class="text">模型</p>
              <div v-if="model_selected">
                <el-card
                  shadow="never"
                  class="my"
                >
                  <div class="title">{{model_selected.model_name}}
                  </div>
                  <div class="info">{{model_selected.short_description}}</div>

                </el-card>
                <p class="text">实验参数</p>
                <el-card
                  shadow="never"
                  class="my"
                >
                  <el-form
                    class="form"
                    v-for="(value,key) in model.parameter"
                    :key="key"
                    label-width="180px"
                    :model=model.parameter
                  >
                    <el-form-item :label="key">
                      <el-input v-model=" model.parameter[key]"></el-input>
                    </el-form-item>
                  </el-form>
                </el-card>
                <p class="text">选择分支</p>
                <el-select
                  v-model="branch"
                  placeholder="请选择分支"
                  size="small"
                  style="width:120px; margin-top:10px"
                >
                  <el-option
                    v-for="item in model.branch_list"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>
                <p class="text">实验描述（选填）</p>
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2}"
                  placeholder="请输入内容"
                  v-model="textarea"
                  style="margin-top:10px"
                >
                </el-input>
              </div>
            </div>
          </div>

        </el-card>
      </el-col>
      <el-col :span="8">

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
                v-model="input[1]"
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="search_model"
                ></el-button>
              </el-input>
            </div>

            <el-card
              shadow="never"
              class="my"
              v-for="(item,index) in model_list "
              :key="index"
            >
              <span
                class="title"
                @click="toModel(item.id)"
              >{{item.model_name}}</span>
              <span
                class="choose"
                @click="select_model(item)"
              >选择</span>
              <div class="info">{{item.short_description}}</div>
            </el-card>

            <p class='c-text'>模型推荐</p>
            <el-card
              shadow="never"
              class="my"
            >
              <span
                class="title"
                @click="toModel(recom.id)"
              >{{recom.model_name}}
              </span>
              <span
                class="choose"
                @click="select_model(recom)"
              >选择</span>
              <div class="info">{{recom.short_description}}</div>
            </el-card>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
//import draggable from 'vuedraggable'
export default {

  components: {
    // draggable

  },

  data() {
    return {
      input: ['', ''],
      search_word: ['', ''],
      data_selected: undefined,
      model_selected: undefined,
      model_list: [],
      data_list: [],
      model: undefined,
      recom: {
        model_name: 'bert_softmax',
        short_description: '经典的bert+softmax模型用于命名实体识别',
        id: 6
      },
      branch: '',
      textarea: ''
    }
  },

  created() {

  },


  mounted() {
  },

  methods: {
    get_modelList(page = 1) {
      this.$http({
        url: "/modelrepos/",
        method: "get",
        params: {
          page: page,
          name: this.search_word[1]
        }
      }).then((res) => {
        let data = res.data
        this.model_list = data.results
      })
    },

    get_dataList(page = 1) {
      this.$http({
        url: "/datasets/",
        method: "get",
        params: {
          page: page,
          name: this.search_word[0]
        }
      }).then((res) => {
        let data = res.data
        this.data_list = data.results
      })
    },
    search_model() {
      this.search_word[1] = this.input[1].trim()
      this.get_modelList()
    },

    search_data() {
      this.search_word[0] = this.input[0].trim()
      this.get_dataList()
    },

    toModel(id) {
      const { href } = this.$router.resolve({
        name: "ModelDetails",
        params: {
          id: id,
        },
      });
      window.open(href, '_blank')
    },

    toDataset(id) {
      const { href } = this.$router.resolve({
        name: "DataDetails",
        params: {
          id: id,
        },
      });
      window.open(href, '_blank')
    },

    select_model(item) {
      this.model_selected = item
      this.get_model(item.id)
    },

    get_model(id) {
      this.$http({
        url: "/modelrepos/" + id + '/',
        method: "get",
      }).then((res) => {
        let data = res.data
        this.model = data
        this.branch = data.branch_list[0]
        console.log(res);
      })
    },

    create_exp() {
      this.$http({
        url: "/experiments/",
        method: "post",
        data: {
          'dataset': this.data_selected.id,
          'model': this.model_selected.id,
          'model_config': JSON.stringify(this.model.parameter),
          'description': this.textarea,
          'branch': this.branch
        }
      }).then((res) => {
        if (res.status == 201) {
          this.$message({
            message: '实验创建成功',
            type: 'success'
          });
        }
      }).catch((error) => {
        this.$message.error('创建实验失败');
        console.log(error)
      })
    }
  }

}
</script>

<style  scoped>
.container {
  padding: 18px 80px;
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
  max-height: 80vh;
}

.text {
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
}

.c-text {
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.el-card {
  border: 1px solid #c0c4cc;
  margin-top: 20px;
  overflow-y: auto;
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

.choose {
  float: right;
  font-size: 14px;
  color: #5194e9;
  cursor: pointer;
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
  display: table-cell;
}

p {
  margin: 0;
}

.form {
  margin-top: 20px;
}
</style>


