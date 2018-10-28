<template>
	<div class="detail page">
		<div class="item">
			 <p>{{newsDetail.title}}</p> 
        <div>
          <span>{{newsDetail.click}}次点击</span>
          <!-- <span>分类:民生经济</span> -->
          <span>添加时间: {{newsDetail.add_time | formatDateYMD}}</span>
        </div>
		</div>
    <div class="divider"></div>
		<div class="detail-content" v-html="newsDetail.content" ></div>
	</div>
</template>

<script>
  export default {
    
    name: '',
    data(){
      return {
        newsDetail: {}
      }
    },
    created(){
      let { id } = this.$route.params;
      this.$axios.get(`getnew/${id}`)
      .then(res => {
        this.newsDetail = res.data.message[0];
      })
    }

  }

</script>

<style lang="css" scoped>
	.detail{
		padding-left: 15px;
		padding-right: 15px;
		background-color: #fff;
	}
  .item p{
    color: #66CCFF;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .item span{
    font-size: 14px;
    margin-right: 20px;
    color: #999999;
  }
  .divider{
    width: 100%;
    height: 1px;
    background-color: #B3B3B3;
    margin: 5px 0;
  }
  .detail-content{
    padding: 3px 3px;
  }
</style>
