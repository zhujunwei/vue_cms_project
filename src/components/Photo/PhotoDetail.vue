<template>
	<div class="photoDetail page">
		<div class="photo-title">
			<p>{{detail.title}}</p>
			<span>发起日期:{{detail.add_time | formatDateYMD}}</span>
			<span>{{detail.click}}次浏览</span>
			<!-- <span>分类:民生经济</span> -->
			<div class="photo-desc">
				<p v-html = 'detail.content'></p>
			</div>
			<!-- <ul class="photoImg">
				<li v-for= "(item, index) in imgList " :key="index">
					<a>
						<img :src="item.src"/>
					</a>
				
				</li>
			</ul> -->
			<vue-preview
				:slides="imgList"
				@close="handleClose"
			>

			</vue-preview>
			<!-- 使用评论组件 -->
			<comment :cid = '$route.params.id'/>
		</div>
	</div>
</template>

<script>
export default {

  name: 'PhotoDetail',

  data() {
    return {
			detail: {},
			imgList: []
    };
	},
	methods: {	
		//获取缩略图片
		getThumimgs(id){
			this.$axios.get(`/getthumimages/${id}`)
				.then(res => {
					this.imgList = res.data.message.map(res => {
						return {
							src: "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=1eb4606c01f79052eb1f403c3cf3d738/0dd7912397dda14493247fcdbab7d0a20cf4869b.jpg" || res.src,
							msrc: "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=1eb4606c01f79052eb1f403c3cf3d738/0dd7912397dda14493247fcdbab7d0a20cf4869b.jpg" || res.src,
							w: 114,
							h: 114
						}
					});
				})
		},
		//获取图文详情
		getPhotoDetail(id){
			this.$axios.get(`/getimageinfo/${id}`)
				.then(res => {
					console.log(res);
					this.detail = res.data.message[0];
				})
		},
		handleClose(){
		}
	},
	created(){
		let queryid = this.$route.params.id;
		this.getThumimgs(queryid);
		this.getPhotoDetail(queryid)
	}
};
</script>

<style lang="css" scoped>
.page{
	background-color: #fff;
	padding-left: 15px;
	padding-right: 15px;
}
.photo-title p{
	font-size: 20px;
	font-weight: 600;
	color: #0F80FF;
	margin: 15px 0;
}
.photo-title  span{
	padding: 10px 5px;
	font-size: 14px;
}
.photo-desc{
	border-top: 1px solid #ececec;
	margin-top: 10px;
}
.photo-desc p{
	font-size: 16px;
	color: #333333;
}
/*.photo-title {
	width: 100%;
	overflow: hidden;
	margin-top: 20px;
}*/



</style>
