<template>
    <el-dialog v-if='vis' title="文件上传" :visible.sync="vis" width="50%" @close="closeDialog">
        <input type="file" id="upload" class="upload" @change="handlerUpload($event)">
        <label for="upload">
            <i class="el-icon-upload my-upload-icon">Choose a file</i>
        </label>
        <div class="fileInfo">
            <ul class="files">
                <li v-for="item in fileList" :key="item">
                    <div class="fileInfo">
                        <div class="fileName filePart">
                            {{ file.name }}
                        </div>
                        <div class="fileSize filePart ml10">
                            {{file.size}}
                        </div>
                        <!--进度条-->
                        <div class="progress">
                            <span
                                :style="{width:file.uploadPercentage,backgroundColor:file.uploadStatus==1 ||file.uploadStatus==2?'':'red'}"></span>
                        </div>
                        <div class="fileStatus">
                            <span v-if="file.uploadStatus == -1" class="uploadFail">出错啦，请重新上传或者删除</span>
                            <span v-if="file.uploadStatus == 2" class="uploadSuccess"> 已上传</span>
                            <span v-if="file.uploadStatus == 1" class="uploadSuccess"> 上传中...</span>
                            <span v-if="file.uploadStatus == -2" class="uploadFail">出错啦，文件类型不符合要求</span>
                            <span v-if="file.uploadStatus == -3" class="uploadFail">出错啦，文件大小超出限制</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </el-dialog>
</template>
<script>
    import {
        insert_team_metails
    } from "../../../api/api"
    export default {
        name: "MyForm",
        props: {
            dialogVis: Boolean,
            dialogData: Object
        },
        watch: {
            dialogVis(data) {
                this.vis = data;
            },
            dialogData(data) {
                console.log(data)
            }
        },
        data() {
            return {
                vis: false,
                table_head: false,
                logdata: [],
                fileList: [],
                uploadSuccess: 0,
            }
        },
        methods: {
            handlerUpload(e) {
                // let tFiles = e.target.files;
                // let len = tFiles.length;
                // for (var i = 0; i < len; i++) {
                //     //开始上传每一个文件
                //     var item = {
                //         name: tFiles[i].name,
                //         uploadPercentage: 1,
                //         size: this.formatFileSize(tFiles[i].size, 0),
                //         uploadStatus: 0
                //     }
                //     console.log(item)
                //     this.fileList.push(item);
                //     //开始上传文件 新建一个formData
                //     let param = new FormData();
                //     param.append("name", "wiiiiiinney");
                //     //通过append向form对象添加数据
                //     param.append("file", tFiles[i]);
                //     //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                //     console.log(param.get("file"));
                //     //判断大小
                //     if (!this.checkFileSize(tFiles[i].size)) {
                //         item.uploadStatus = -3;
                //         return false;
                //     }
                //     if (!this.checkFileType(tFiles[i].name.split('.')[1])) {
                //         item.uploadStatus = -2;
                //         return false;
                //     }
                //通过axios上传文件
                //配置
                // let config = {
                //     //添加请求头 
                //     headers: {
                //         "Content-Type": "multipart/form-data"
                //     },
                //     //添加上传进度监听事件 
                //     onUploadProgress: e => {
                //         var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                //         console.log(this.fileList)
                //         item.uploadPercentage = completeProgress;
                //     }
                // };
                // axios.post('http://127.0.0.1:8778/upload', param, config).then(function (
                //     response) {
                //     console.log(response);
                //     item.uploadStatus = 2;
                // }).catch(function (error) {
                //     console.log(error);
                //     item.uploadStatus = -1;
                // });
                let tFiles = e.target.files[0];
                let len = tFiles.length;
                console.log(len)
                let param = new FormData()
                param.set("file", tFiles)
                insert_team_metails(param)
                    .then(res => {
                        console.log(res)
                        this.$message('success', res.message);
                        this.tableData = res.list
                        this.pages.total = res.list.length
                        //重新请求
                        this.$message({
                            type: 'success',
                            message: '更新成功!'
                        });
                    })
            }
        },
        closeDialog() {
            this.vis = false;
            this.$emit("dialogMyFormClose", false);
        },
        formatFileSize: function (fileSize, idx) {
            var units = ["B", "KB", "MB", "GB"];
            idx = idx || 0;
            if (fileSize < 1024 || idx === units.length - 1) {
                return fileSize.toFixed(1) +
                    units[idx];
            }
            return this.formatFileSize(fileSize / 1024, ++idx);
        },
        checkFileType: function (fileType) {
            const acceptTypes = ['xls', 'doc', 'jpg'];
            for (var i = 0; i < acceptTypes.length; i++) {
                if (fileType === acceptTypes[i]) {
                    return true;
                }
            }
            return false;
        },
        checkFileSize: function (fileSize) {
            //2M
            const MAX_SIZE = 2 * 1024 * 1024;
            if (fileSize > MAX_SIZE) {
                return false;
            }
            return true;
        }
    }
</script>
<style lang="css">
    .teacher-info {
        text-align: left;
    }

    .el-form .el-form-item__label {
        color: #606266;
    }

    .upload {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .upload+.my-upload-icon {
        font-size: 2em;
        font-weight: 700;
        display: inline-block;
    }
</style>