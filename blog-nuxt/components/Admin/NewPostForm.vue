<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Description:</AppInput>
        <AppInput v-model="post.img">Img:</AppInput>

        <div class="content-wrapper">
          <label class="content-wrapper__label">Content:</label>
          <div class="content-controls">
            <input
              class="content-controls__input"
              type="radio"
              id="html"
              value="HTML"
              v-model="post.picked"
            >
            <label class="content-controls__label" for="html">HTML</label>

            <input
              class="content-controls__input"
              type="radio"
              id="markdown"
              value="Markdown"
              v-model="post.picked"
            >
            <label class="content-controls__label" for="markdown">Markdown</label>
          </div>

          <div class="content-view">
            <AppTextArea v-if="post.picked === 'HTML'" v-model="post.content"></AppTextArea>
            <AppTextArea v-else v-model="post.content"></AppTextArea>

            <div
              class="preview"
              v-if="post.picked === 'HTML'"
              v-html="post.content"
            ></div>
            <div
              class="preview"
              v-else
              v-html="markdownTextCompiled"></div>
          </div>
        </div>

        <div class="controls">
          <AppButton class="btnDanger" type="button" @click="censel">Cencel</AppButton>
          <AppButton>Save!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import marked from '@/plugins/marked.js';

  export default {
    props: {
      postEdit: {
        type: Object,
      }
    },
    mounted() {
      if (this.post.picked === 'Markdown') {
        this.post.content = this.post.contentWithoutTags;
      }
    },
    data() {
      return {
        post: this.postEdit ? {...this.postEdit} : {
            title: '',
            descr: '',
            img: '',
            picked: 'HTML',
            content: '',
            contentWithoutTags: null
          }
      }
    },
    computed: {
      markdownTextCompiled() {
        return marked(this.post.content, { sanitize: true })
      },
    },
    methods: {
      censel() {
        this.$router.push('/admin')
      },
      onSubmit() {
        if (this.post.picked === 'Markdown') {
          this.post.contentWithoutTags = this.post.content

          this.$emit('submit', {
            ...this.post,
            content: this.markdownTextCompiled,
          })
        }

        this.$emit('submit', this.post)
      }
    }
  }
</script>

<style scoped lang="scss">
  .controls {
    display: block;
    margin: 20px 0;
    text-align: center;
  }

  .content-wrapper__label {
    margin-bottom: 0;
  }

  .content-controls {
    display: flex;
    align-items: center;

    .content-controls__input {
      margin-bottom: 0;
      width: max-content;
      cursor: pointer;
    }

    .content-controls__label {
      margin: 0 15px 0 0;
      padding-left: 5px;
      width: max-content;
      cursor: pointer;
    }
  }

  .content-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;

    .preview {
      margin-top: 10px;
      padding: 20px ;
      border-radius: 15px;
      border: 1px solid #ccc;
      background: #fff;
    }
  }

</style>
