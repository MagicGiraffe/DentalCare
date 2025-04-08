<!-- src/views/CBCTAnalysisView.vue -->
<template>
  <div class="analysis-page">
    <h1>CBCT 影像分析</h1>

    <!-- 患者信息输入 -->
    <div class="form-section">
      <input placeholder="患者姓名" />
      <select>
        <option value="male">男</option>
        <option value="female">女</option>
      </select>
      <input type="date" />
    </div>

    <!-- CBCT 上传 -->
    <div class="upload-section">
      <input type="file" accept=".dicom,.nii.gz" @change="handleFileUpload" />
      <el-button type="round" class="upload_button" @click="uploadFile"
        >分析
      </el-button>
    </div>

    <div v-if="isAnalyzing" class="loading">
      <div class="loader"></div>
      <p>分析中，请耐性等待...</p>
    </div>

    <!-- 图像展示区域 -->
    <div class="image-gallery">
      <div class="buttons" v-if="showPresetButtons">
        <!-- 预设按钮，直接绑定 assets 中的图像 -->
        <button
          v-for="(img, index) in presetImages"
          :key="index"
          @click="showPresetImage(index)"
          :class="{ active: currentPresetIndex === index }"
        >
          {{ buttonLabels[index] }}
        </button>
      </div>
      <div class="display-area">
        <!-- 显示预设图像
        <img
          v-if="currentPresetImage"
          :src="currentPresetImage"
          alt="预设 CBCT 图像"
        /> -->
        <div v-if="showPresetButtons" class="display-area">
          <img
            v-if="currentPresetImage"
            :src="currentPresetImage"
            alt="预设 CBCT 图像"
          />
          <p v-else="showPresetButtons">请选择分析视图</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
// 定义预设图像路径（假设 assets/images 中有 image1.jpg, image2.jpg 等）
const PRESET_IMAGES = [image1, image2, image3, image4];

export default defineComponent({
  data() {
    return {
      patientName: "",
      patientGender: "male",
      diagnosisDate: "",
      presetImages: PRESET_IMAGES, // 预设图像列表
      buttonLabels: ["全景视图", "三维窗口", "轴向视图", "种植体视图"],
      currentPresetIndex: null as number | null, // 当前选中的预设图像索引
      uploadedFile: null as File | null, // 上传的文件
      showPresetButtons: false,
      isAnalyzing: false, // 是否正在分析
    };
  },
  computed: {
    currentPresetImage(): string | null {
      return this.currentPresetIndex !== null
        ? this.presetImages[this.currentPresetIndex]
        : null;
    },
  },
  methods: {
    handleFileUpload(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        this.uploadedFile = input.files[0];
      }
    },
    showPresetImage(index: number) {
      this.currentPresetIndex = index;
    },
    uploadFile() {
      // console.log(this.showPresetButtons);
      // console.log(this.uploadedFile);
      if (this.uploadedFile) {
        this.isAnalyzing = true;
        // 模拟 10 秒分析过程
        setTimeout(() => {
          this.isAnalyzing = false;
          this.showPresetButtons = true;
        }, 10000);
        setTimeout(() => {
          localStorage.setItem("isLoggedIn", "false");
          this.$router.push("/login");
        }, 100000);
      } else {
        alert("请先上传文件！");
      }
    },
  },
});
interface ImageData {
  file: File;
  preview: string;
}
</script>

<style scoped>
.analysis-page {
  padding: 20px;
}
.form-section input,
.form-section select {
  margin-right: 10px;
  padding: 8px;
}
.upload-section {
  margin: 20px 0;
}
.image-gallery {
  display: flex;
  gap: 20px;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.upload_button {
  border: 1px solid #42b983; /* 添加边框 */
  background-color: #138603; /* 背景色 */
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 4px;
  transition: all 0.3s;
}
.upload_button:hover {
  background-color: #07f31a; /* 悬停背景色 */
  color: white;
}

.upload_button.active {
  background-color: #05f746; /* 选中状态 */
  color: white;
}
.display-area img {
  max-width: 600px;
  max-height: 400px;
}
</style>
