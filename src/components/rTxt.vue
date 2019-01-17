<template>
    <div>
        <span>1111</span>
        <div id="summernote">111231</div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data() {
            return {}
        },
        mounted() {
            $('#summernote').summernote({
                lang: 'zh-CN',
                placeholder: '请输入内容',
                height: 400,
                width: 1000,
                htmlMode: true,
                toolbar: [
                    ['style', ['bold', 'italic', 'underline', 'clear']],
                    ['fontsize', ['fontsize']],
                    ['fontname', ['fontname']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'picture']],
                    ['mybutton', ['myVideo']]
                ],
                fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
                fontNames: [
                    'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
                    'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
                    'Tahoma', 'Times New Roman', 'Verdana'
                ],
                callbacks: {
                    onSubmit: function() {
                    }
                }
            })
        },
        methods: {},
    }
</script>

<style>
    #summernote {
        margin-left: 100px;
    }
</style>