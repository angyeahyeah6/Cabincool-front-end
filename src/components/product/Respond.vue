<template>
    <div class="respond-container">
        <div class="black-header">
            <img src="../../assets/selfie.png">
        </div>
        <div class="description">
            <input type="text" placeholder="說明">
        </div>
        <div class="web-link">
            <input type="text" placeholder="網址">
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.respond-container{
    width: 888px;
    height: 500px;
    background :white;
    margin-top:50px;
    border: 1px solid #435058;
    .black-header{
        height: 78px;
        width:100%;
        background:#435058;
        img{
            margin:2%;
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
    }
    .description{
        height:60%;
        width:100%;
        border-bottom:1px solid #435058;
    }
    .web-link{
        height:40%;
        width:100%;
    }
    input{
        width:99%;
        height:50%;
        border:transparent;
    }
}

</style>
