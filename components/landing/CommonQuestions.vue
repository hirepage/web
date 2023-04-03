<script>
  export default {
    name: 'SocialProof',
    data () {
      return {
        questions: [
          {
            id: 'faq-0',
            title: 'What happens when a lead submits my form?',
            answer: 'You will receive an email with all the info collected. Then you can reply to the lead from that email.'
          },
          {
            title: 'How should I send potential clients to my page?',
            answer: 'Website links, QR codes, twitter profile, email signatures'
          },
          {
            title: 'Will my page look good everywhere?',
            answer: 'The current version of Hirepage will stay free. We are working on adding premium features that you will be able to pay for if you want'
          },
          {
            title: 'Will Hirepage always be free?',
            answer: 'The current version of Hirepage will stay free. We are working on adding premium features that you will be able to pay for if you want'
          },
          {
            title: 'Can you add an icon link for ...?',
            answer: 'Yep! Send me an email at dylan@hire.page and I will add is as soon as possible.'
          }
        ]
      }
    }
  }
</script>

<template>
  <div>
    <b-container class="bottom-container">
      <b-row align-h="center">
        <b-col md="10">
          <h1 class="faqs-header">
            Common Questions
          </h1>
          <b-list-group class="faq-list">
            <b-list-group-item v-for="q in questions" :key="q.title" v-b-toggle.faq-0 class="faq-section">
              <b-row>
                <b-col>
                  <h3 class="faq-question">
                    {{ q.title }}
                  </h3>
                </b-col>
                <b-col cols="auto" class="pt-2">
                  <font-awesome-icon
                    icon="minus"
                    width="8"
                    height="12"
                    class="float-right when-open"/>
                  <font-awesome-icon
                    icon="plus"
                    width="8"
                    height="12"
                    class="float-right when-closed"/>
                </b-col>
              </b-row>
              <b-collapse :id="q.id" accordion="faq">
                <p class="faq-answer">
                  {{ q.answer }}
                </p>
              </b-collapse>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

  .faqs-header {
    color: white;
    font-weight: bold;
    font-size: 42px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  .bottom-container {

  }

  .faq-section {
    background-color: white;
    padding: 40px;
  }

  .faq-question {
    font-size: 24px;
    margin-top: 8px;
  }

  .faq-answer {
    font-size: 18px;
    opacity: 0.7;
  }

  .collapsed .when-open,
  .not-collapsed .when-closed {
    display: none;
  }

  .faq-list {
    border-radius: 44px;
  }

  @media (min-width: 768px) {

    .faqs-header {
      font-family: gibson-semibold, sans-serif;
      font-size: 60px;
      padding-top: 80px;
      padding-bottom: 20px;
      text-align: left;
    }

    .bottom-container {
      padding-top: 100px;
      padding-bottom: 400px;
    }
  }
</style>
