<template>
	<div>
		<div class="photo-title">
			<p>图片标题</p>
			<span>发起日期:2017-07-09</span>
			<span>0次浏览</span>
			<span>分类:民生经济</span>
		
			<div class="photo-desc">
				<!-- <p v-html = ''></p> -->
			</div>

			<!-- 使用评论组件 -->
			<!-- <Comment :cid = '$route.query.id'/> -->
		</div>
	</div>
</template>

<script>
export default {

  name: 'PhotoDetail',

  data() {
    return {
    	
    };
  }
};
</script>

<style lang="css" scoped>
.photo-title p{
	font-size: 20px;
	font-weight: 600;
	color: #0F80FF;
	margin: 15px 0;
}
.photo-title  span{
	padding: 10px 5px;
}
.photo-desc p{
	font-size: 18px;
	color: #333333;
}
/*.photo-title {
	width: 100%;
	overflow: hidden;
	margin-top: 20px;
}*/


</style>
