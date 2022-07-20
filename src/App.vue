<template>
  <div>
    <div v-for="(question, index) in questions" :key="index">
      <div v-if="currentQuestion === index">
        <question-card :index="index + 1" :question="question" />
      </div>
    </div>
    <div class="buttons">
      <button-component
        v-if="currentQuestion !== 0"
        @clicked="goToPrev"
        :style="'Danger'"
        :value="'Prev'"
      />
      <button-component
        v-if="currentQuestion !== questions.length - 1"
        @clicked="goToNext"
        :value="'Next'"
        :style="'Success'"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "./components/ButtonComponent.vue";
import QuestionCard from "./components/QuestionCard.vue";
import Axios from "axios";

export default {
  components: {
    ButtonComponent,
    QuestionCard,
  },
  data() {
    return {
      questions: [],
      currentQuestion: 0,
    };
  },
  methods: {
    goToNext() {
      this.currentQuestion += 1;
    },
    goToPrev() {
      this.currentQuestion -= 1;
    },
    async loadQuestions() {
      const response = await Axios.get("https://opentdb.com/api.php?amount=10");
      return response.data;
    },
  },
  mounted: async function () {
    const data = await this.loadQuestions();
    this.questions = data.results;
  },
};
</script>

<style lang="scss">
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
