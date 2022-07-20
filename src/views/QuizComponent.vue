<template>
  <div>
    <div v-for="(question, index) in questions" :key="index">
      <div v-if="currentQuestion === index">
        <question-card
          @checked="selectOption"
          :index="index"
          :question="question"
        />
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
      <button-component
        v-if="currentQuestion === questions.length - 1"
        @clicked="finishQuiz"
        :value="'Finish'"
        :style="'Success'"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import QuestionCard from "../components/QuestionCard.vue";
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
  computed: {
    score() {
      return this.questions.filter(
        (question) => question.chosenAnswer === question.correct_answer
      );
    },
  },

  methods: {
    finishQuiz() {
      this.$router.push({
        name: "Score",
        params: {
          userscore: this.score.length,
        },
      });
    },
    selectOption(params) {
      this.questions[params.qIndex].chosenAnswer = params.value;
    },
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

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
