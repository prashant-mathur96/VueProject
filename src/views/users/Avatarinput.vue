<template>
    <div>
        <input type="file" accept="image/*" class="d-none" ref="file" @change="change">
        <div class="position-relative d-inline-block">
            <img :src="src" alt="Avatar" class="h-25 w-25">
            <div class="position-absolute top-0 w-100 h-100 bg-black opacity-25">
                <button class="w-100 h-100" @click="browse()">Browse</button>
            </div>
        </div>
    </div>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
export default {
    props: {
        value: File,
        defaultSrc: String,
    },
    data() {
        return {
            src: avatar,
            file: null
        }
    },  
    methods: {
        browse(){
            this.$refs.file.click();
        },
        change(e){
            this.file = e.target.files[0];
            this.$emit('fileInput', this.file);
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
            }
        }
    }
}

</script>