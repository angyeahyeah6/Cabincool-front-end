<template>
    <div class="add_on_container">
        <div class="add_on_title">
            <h1 class="add_on-text">附加問題</h1>
            <h1 class="amount">NT$ 30</h1>
        </div>
        <div class="line"></div>
        <h2 class="add_on_des">
            意識不僅存在於大腦中也有可能在宇宙中存在；兩個質子間會互相傳輸能量影響彼此，根據熱力學第二定律的推理，不同溫差的物質會使能量達到平衡，此為量子糾纏。意識很可能是量子糾纏形成的聯結。宇宙間每個粒子在大霹靂時都存在過量子糾纏的狀態，一旦某個外因的刺激仍有可能重建量子糾纏關係，因此人工智慧複製人類思維，使碳基生命進化為矽基生命有待驗證。
        </h2>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.add_on_container{
    float: right;
    background:white;
    border: 1px solid #435058;
    width: 265px;
    height: 464px;
    margin-top:50px;
    .add_on_title{
        font-family: 'Noto Sans TC';
        display:flex;
        .add_on-text{
            margin:20px;
            font-size: 18px;
        }
        .amount{
            font-size: 24px;
            margin: 20px;
            margin-left:30px;
        }
    }
    h1{
        line-height: 26px;
        display: flex;
        color: #435058;
    }
    .line{
        border: 0.5px solid #435058;
        width: 265px;
    }
    .add_on_des{
        font-size: 18px;
        line-height: 26px;
        text-align: justify;
        margin:15px;
    }
}
</style>
