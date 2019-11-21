<template>
    <el-row>
        <el-col :span="10">
            <div class="filling-area">
                <h1 class="title-1">提問</h1>
                <h1 class="title-2">問題標題</h1>
                <input type="text">
                <h1 class="title-2">問題分類</h1>
                <select></select>
                <h1 class="title-2">發問期間</h1>
                <div style="margin-bottom: 30px; display: block;">
                    <p-radio class="p-default p-round p-thick" name="time">一週</p-radio><br>
                    <p-radio class="p-default p-round p-thick" name="time">雙週</p-radio><br>
                    <p-radio class="p-default p-round p-thick" name="time">一個月</p-radio>
                </div>
                <h1 class="title-2">問題內容</h1>
                <input type="class" style="height: 150px;">
            </div>
        </el-col>
        <el-col :span="12" :offset="2">
            <el-row>
                <el-col :span="16">
                    <div class="filling-area" style="margin-top:">
                        <h1 class="title-2">投票機制</h1>
                    </div>
                </el-col>
                <el-col :span="6" :offset="2">
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
export default {
}
</script>
<style lang="scss">
@import '~pretty-checkbox/src/pretty-checkbox.scss';
.p-default{
    margin-bottom: 20px;
    margin-top:10px;
}
p-radio{
    width:10px;
    border: 2px solid #435058;
    box-sizing: border-box;
    color: #435058;
}
.el-row {
  padding-left: 100px;
  padding-right:100px;
}
.filling-area{
    color: #435058;
    .title-1{
        font-size: 24px;
        line-height: 35px;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .title-2{
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 5px;
    }
    input{
        margin-bottom: 5%;
        width: 100%;
        height:40px;
        background: #FBFBFB;
        border: 2px solid #435058;
        box-sizing: border-box;
    }
    select{
        margin-bottom: 5%;
        width: 100%;
        height:40px;
        background: #FBFBFB;
        border: 2px solid #435058;
        box-sizing: border-box;
    }
}
</style>
