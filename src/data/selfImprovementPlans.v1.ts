export type PlanTask = { id: string; text: string };
export type PlanDay = { day: number; affirmation: string; tasks: PlanTask[] };
export type ImprovementPlan = { id: string; category: string; title: string; days: PlanDay[] };

export const PLANS_V1: ImprovementPlan[] = [
  {
    "id": "resilience",
    "category": "Mental Well-Being",
    "title": "Resilience",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "resilience-d1-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d1-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d1-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d1-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d1-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "resilience-d2-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d2-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d2-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d2-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d2-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "resilience-d3-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d3-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d3-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d3-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d3-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "resilience-d4-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d4-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d4-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d4-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d4-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "resilience-d5-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d5-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d5-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d5-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d5-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "resilience-d6-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d6-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d6-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d6-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d6-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "resilience-d7-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d7-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d7-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d7-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d7-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "resilience-d8-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d8-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d8-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d8-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d8-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "resilience-d9-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d9-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d9-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d9-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d9-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "resilience-d10-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d10-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d10-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d10-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d10-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "resilience-d11-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d11-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d11-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d11-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d11-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "resilience-d12-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d12-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d12-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d12-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d12-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "resilience-d13-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d13-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d13-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d13-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d13-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "resilience-d14-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d14-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d14-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d14-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d14-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "resilience-d15-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d15-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d15-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d15-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d15-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "resilience-d16-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d16-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d16-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d16-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d16-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "resilience-d17-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d17-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d17-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d17-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d17-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "resilience-d18-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d18-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d18-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d18-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d18-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "resilience-d19-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d19-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d19-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d19-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d19-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "resilience-d20-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d20-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d20-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d20-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d20-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "resilience-d21-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d21-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d21-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d21-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d21-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "resilience-d22-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d22-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d22-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d22-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d22-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "resilience-d23-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d23-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d23-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d23-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d23-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "resilience-d24-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d24-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d24-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d24-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d24-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "resilience-d25-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d25-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d25-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d25-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d25-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "resilience-d26-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d26-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d26-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d26-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d26-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "resilience-d27-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d27-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d27-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d27-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d27-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "resilience-d28-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d28-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d28-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d28-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d28-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "resilience-d29-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d29-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d29-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d29-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d29-t5", "text": "Identify one difficulty you endured today." }
    ]
  },
  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "resilience-d30-t1", "text": "Commit to completing today, even imperfectly." },
      { "id": "resilience-d30-t2", "text": "Write one challenge you might face today." },
      { "id": "resilience-d30-t3", "text": "Repeat: I adapt, recover, and keep moving forward." },
      { "id": "resilience-d30-t4", "text": "Remind yourself progress doesn't require perfection." },
      { "id": "resilience-d30-t5", "text": "Identify one difficulty you endured today." }
    ]
  }
]
  },
  {
    "id": "cognitive-strength",
    "category": "Mental Well-Being",
    "title": "Cognitive Strength",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "cognitive-strength-d1-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d1-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d1-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d1-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d1-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "cognitive-strength-d2-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d2-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d2-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d2-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d2-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "cognitive-strength-d3-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d3-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d3-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d3-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d3-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "cognitive-strength-d4-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d4-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d4-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d4-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d4-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "cognitive-strength-d5-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d5-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d5-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d5-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d5-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "cognitive-strength-d6-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d6-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d6-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d6-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d6-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "cognitive-strength-d7-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d7-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d7-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d7-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d7-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "cognitive-strength-d8-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d8-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d8-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d8-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d8-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "cognitive-strength-d9-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d9-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d9-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d9-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d9-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "cognitive-strength-d10-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d10-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d10-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d10-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d10-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "cognitive-strength-d11-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d11-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d11-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d11-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d11-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "cognitive-strength-d12-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d12-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d12-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d12-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d12-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "cognitive-strength-d13-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d13-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d13-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d13-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d13-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "cognitive-strength-d14-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d14-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d14-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d14-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d14-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "cognitive-strength-d15-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d15-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d15-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d15-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d15-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "cognitive-strength-d16-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d16-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d16-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d16-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d16-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "cognitive-strength-d17-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d17-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d17-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d17-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d17-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "cognitive-strength-d18-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d18-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d18-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d18-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d18-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "cognitive-strength-d19-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d19-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d19-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d19-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d19-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "cognitive-strength-d20-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d20-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d20-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d20-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d20-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "cognitive-strength-d21-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d21-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d21-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d21-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d21-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "cognitive-strength-d22-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d22-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d22-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d22-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d22-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "cognitive-strength-d23-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d23-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d23-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d23-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d23-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "cognitive-strength-d24-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d24-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d24-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d24-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d24-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "cognitive-strength-d25-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d25-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d25-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d25-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d25-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "cognitive-strength-d26-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d26-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d26-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d26-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d26-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "cognitive-strength-d27-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d27-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d27-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d27-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d27-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "cognitive-strength-d28-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d28-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d28-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d28-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d28-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "cognitive-strength-d29-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d29-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d29-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d29-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d29-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  },
  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "cognitive-strength-d30-t1", "text": "Identify one complex task requiring focused thinking today." },
      { "id": "cognitive-strength-d30-t2", "text": "Practice holding two opposing ideas without resolving them." },
      { "id": "cognitive-strength-d30-t3", "text": "Reframe a problem using a different perspective." },
      { "id": "cognitive-strength-d30-t4", "text": "Summarize today's main challenge in one sentence." },
      { "id": "cognitive-strength-d30-t5", "text": "Identify one question worth thinking about tomorrow." }
    ]
  }
]
  },
  {
    "id": "stress-management",
    "category": "Mental Well-Being",
    "title": "Stress Management",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "stress-management-d1-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d1-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d1-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d1-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d1-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "stress-management-d2-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d2-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d2-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d2-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d2-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "stress-management-d3-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d3-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d3-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d3-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d3-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "stress-management-d4-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d4-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d4-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d4-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d4-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "stress-management-d5-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d5-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d5-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d5-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d5-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "stress-management-d6-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d6-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d6-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d6-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d6-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "stress-management-d7-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d7-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d7-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d7-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d7-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "stress-management-d8-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d8-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d8-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d8-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d8-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "stress-management-d9-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d9-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d9-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d9-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d9-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "stress-management-d10-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d10-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d10-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d10-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d10-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "stress-management-d11-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d11-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d11-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d11-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d11-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "stress-management-d12-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d12-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d12-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d12-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d12-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "stress-management-d13-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d13-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d13-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d13-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d13-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "stress-management-d14-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d14-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d14-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d14-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d14-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "stress-management-d15-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d15-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d15-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d15-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d15-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "stress-management-d16-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d16-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d16-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d16-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d16-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "stress-management-d17-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d17-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d17-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d17-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d17-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "stress-management-d18-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d18-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d18-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d18-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d18-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "stress-management-d19-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d19-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d19-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d19-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d19-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "stress-management-d20-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d20-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d20-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d20-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d20-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "stress-management-d21-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d21-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d21-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d21-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d21-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "stress-management-d22-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d22-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d22-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d22-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d22-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "stress-management-d23-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d23-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d23-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d23-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d23-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "stress-management-d24-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d24-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d24-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d24-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d24-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "stress-management-d25-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d25-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d25-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d25-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d25-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "stress-management-d26-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d26-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d26-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d26-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d26-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "stress-management-d27-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d27-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d27-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d27-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d27-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "stress-management-d28-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d28-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d28-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d28-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d28-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "stress-management-d29-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d29-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d29-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d29-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d29-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  },
  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "stress-management-d30-t1", "text": "Identify one potential stress trigger for today." },
      { "id": "stress-management-d30-t2", "text": "Remind yourself urgency does not equal importance." },
      { "id": "stress-management-d30-t3", "text": "Release the need to control everything today." },
      { "id": "stress-management-d30-t4", "text": "Pause briefly when stress rises instead of reacting immediately." },
      { "id": "stress-management-d30-t5", "text": "Allow unfinished tasks to remain unfinished tonight." }
    ]
  }
]
  },
  {
    "id": "confidence-self-worth",
    "category": "Mental Well-Being",
    "title": "Confidence & Self-Worth",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "confidence-self-worth-d1-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d1-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d1-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d1-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d1-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "confidence-self-worth-d2-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d2-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d2-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d2-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d2-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "confidence-self-worth-d3-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d3-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d3-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d3-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d3-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "confidence-self-worth-d4-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d4-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d4-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d4-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d4-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "confidence-self-worth-d5-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d5-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d5-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d5-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d5-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "confidence-self-worth-d6-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d6-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d6-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d6-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d6-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "confidence-self-worth-d7-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d7-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d7-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d7-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d7-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "confidence-self-worth-d8-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d8-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d8-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d8-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d8-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "confidence-self-worth-d9-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d9-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d9-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d9-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d9-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "confidence-self-worth-d10-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d10-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d10-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d10-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d10-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "confidence-self-worth-d11-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d11-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d11-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d11-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d11-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "confidence-self-worth-d12-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d12-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d12-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d12-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d12-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "confidence-self-worth-d13-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d13-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d13-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d13-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d13-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "confidence-self-worth-d14-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d14-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d14-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d14-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d14-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "confidence-self-worth-d15-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d15-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d15-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d15-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d15-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "confidence-self-worth-d16-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d16-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d16-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d16-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d16-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "confidence-self-worth-d17-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d17-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d17-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d17-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d17-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "confidence-self-worth-d18-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d18-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d18-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d18-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d18-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "confidence-self-worth-d19-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d19-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d19-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d19-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d19-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "confidence-self-worth-d20-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d20-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d20-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d20-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d20-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "confidence-self-worth-d21-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d21-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d21-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d21-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d21-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "confidence-self-worth-d22-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d22-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d22-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d22-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d22-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "confidence-self-worth-d23-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d23-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d23-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d23-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d23-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "confidence-self-worth-d24-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d24-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d24-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d24-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d24-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "confidence-self-worth-d25-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d25-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d25-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d25-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d25-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "confidence-self-worth-d26-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d26-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d26-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d26-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d26-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "confidence-self-worth-d27-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d27-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d27-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d27-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d27-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "confidence-self-worth-d28-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d28-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d28-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d28-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d28-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "confidence-self-worth-d29-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d29-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d29-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d29-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d29-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "confidence-self-worth-d30-t1", "text": "Name one personal strength you bring to today." },
      { "id": "confidence-self-worth-d30-t2", "text": "Repeat: \"My value doesn’t depend on today’s outcomes.\"" },
      { "id": "confidence-self-worth-d30-t3", "text": "Accept feedback without personalizing it." },
      { "id": "confidence-self-worth-d30-t4", "text": "Acknowledge one moment you acted with self-respect today." },
      { "id": "confidence-self-worth-d30-t5", "text": "Identify one action that reflected self-respect today." }
    ]
  }
]
  },
  {
    "id": "emotional-intelligence",
    "category": "Mental Well-Being",
    "title": "Emotional Intelligence",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "emotional-intelligence-d1-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d1-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d1-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d1-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d1-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "emotional-intelligence-d2-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d2-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d2-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d2-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d2-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "emotional-intelligence-d3-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d3-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d3-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d3-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d3-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "emotional-intelligence-d4-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d4-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d4-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d4-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d4-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "emotional-intelligence-d5-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d5-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d5-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d5-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d5-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "emotional-intelligence-d6-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d6-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d6-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d6-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d6-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "emotional-intelligence-d7-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d7-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d7-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d7-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d7-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "emotional-intelligence-d8-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d8-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d8-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d8-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d8-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "emotional-intelligence-d9-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d9-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d9-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d9-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d9-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "emotional-intelligence-d10-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d10-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d10-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d10-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d10-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "emotional-intelligence-d11-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d11-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d11-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d11-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d11-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "emotional-intelligence-d12-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d12-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d12-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d12-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d12-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "emotional-intelligence-d13-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d13-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d13-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d13-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d13-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "emotional-intelligence-d14-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d14-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d14-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d14-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d14-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "emotional-intelligence-d15-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d15-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d15-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d15-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d15-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "emotional-intelligence-d16-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d16-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d16-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d16-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d16-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "emotional-intelligence-d17-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d17-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d17-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d17-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d17-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "emotional-intelligence-d18-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d18-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d18-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d18-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d18-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "emotional-intelligence-d19-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d19-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d19-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d19-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d19-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "emotional-intelligence-d20-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d20-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d20-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d20-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d20-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "emotional-intelligence-d21-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d21-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d21-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d21-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d21-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "emotional-intelligence-d22-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d22-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d22-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d22-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d22-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "emotional-intelligence-d23-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d23-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d23-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d23-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d23-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "emotional-intelligence-d24-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d24-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d24-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d24-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d24-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "emotional-intelligence-d25-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d25-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d25-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d25-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d25-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "emotional-intelligence-d26-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d26-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d26-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d26-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d26-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "emotional-intelligence-d27-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d27-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d27-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d27-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d27-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "emotional-intelligence-d28-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d28-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d28-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d28-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d28-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "emotional-intelligence-d29-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d29-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d29-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d29-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d29-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "emotional-intelligence-d30-t1", "text": "Name the main emotion you feel this morning." },
      { "id": "emotional-intelligence-d30-t2", "text": "Consider how your mood could affect others today." },
      { "id": "emotional-intelligence-d30-t3", "text": "Pause to interpret emotions before responding verbally." },
      { "id": "emotional-intelligence-d30-t4", "text": "Identify one emotion you noticed clearly today." },
      { "id": "emotional-intelligence-d30-t5", "text": "End the day valuing emotional understanding as a skill." }
    ]
  }
]
  },
  {
    "id": "mindfulness-presence",
    "category": "Mental Well-Being",
    "title": "Mindfulness & Presence",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "mindfulness-presence-d1-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d1-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d1-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d1-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d1-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "mindfulness-presence-d2-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d2-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d2-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d2-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d2-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "mindfulness-presence-d3-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d3-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d3-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d3-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d3-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "mindfulness-presence-d4-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d4-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d4-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d4-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d4-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "mindfulness-presence-d5-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d5-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d5-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d5-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d5-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "mindfulness-presence-d6-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d6-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d6-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d6-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d6-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "mindfulness-presence-d7-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d7-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d7-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d7-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d7-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "mindfulness-presence-d8-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d8-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d8-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d8-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d8-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "mindfulness-presence-d9-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d9-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d9-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d9-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d9-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "mindfulness-presence-d10-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d10-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d10-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d10-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d10-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "mindfulness-presence-d11-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d11-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d11-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d11-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d11-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "mindfulness-presence-d12-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d12-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d12-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d12-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d12-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "mindfulness-presence-d13-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d13-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d13-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d13-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d13-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "mindfulness-presence-d14-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d14-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d14-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d14-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d14-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "mindfulness-presence-d15-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d15-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d15-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d15-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d15-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "mindfulness-presence-d16-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d16-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d16-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d16-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d16-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "mindfulness-presence-d17-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d17-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d17-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d17-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d17-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "mindfulness-presence-d18-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d18-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d18-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d18-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d18-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "mindfulness-presence-d19-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d19-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d19-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d19-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d19-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "mindfulness-presence-d20-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d20-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d20-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d20-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d20-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "mindfulness-presence-d21-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d21-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d21-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d21-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d21-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "mindfulness-presence-d22-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d22-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d22-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d22-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d22-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "mindfulness-presence-d23-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d23-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d23-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d23-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d23-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "mindfulness-presence-d24-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d24-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d24-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d24-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d24-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "mindfulness-presence-d25-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d25-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d25-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d25-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d25-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "mindfulness-presence-d26-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d26-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d26-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d26-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d26-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "mindfulness-presence-d27-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d27-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d27-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d27-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d27-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "mindfulness-presence-d28-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d28-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d28-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d28-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d28-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "mindfulness-presence-d29-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d29-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d29-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d29-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d29-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "mindfulness-presence-d30-t1", "text": "Begin the day without rushing the first activity." },
      { "id": "mindfulness-presence-d30-t2", "text": "Notice physical sensations while commuting." },
      { "id": "mindfulness-presence-d30-t3", "text": "Notice when attention drifts and gently return." },
      { "id": "mindfulness-presence-d30-t4", "text": "Notice textures, sounds, or movements around you." },
      { "id": "mindfulness-presence-d30-t5", "text": "Observe thoughts passing without engaging them." }
    ]
  }
]
  },
  {
    "id": "mental-clarity",
    "category": "Mental Well-Being",
    "title": "Mental Clarity",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "mental-clarity-d1-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d1-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d1-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d1-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d1-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "mental-clarity-d2-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d2-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d2-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d2-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d2-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "mental-clarity-d3-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d3-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d3-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d3-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d3-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "mental-clarity-d4-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d4-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d4-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d4-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d4-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "mental-clarity-d5-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d5-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d5-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d5-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d5-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "mental-clarity-d6-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d6-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d6-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d6-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d6-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "mental-clarity-d7-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d7-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d7-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d7-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d7-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "mental-clarity-d8-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d8-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d8-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d8-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d8-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "mental-clarity-d9-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d9-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d9-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d9-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d9-t5", "text": "Mentally close open loops for the night." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "mental-clarity-d10-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d10-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d10-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d10-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d10-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "mental-clarity-d11-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d11-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d11-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d11-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d11-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "mental-clarity-d12-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d12-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d12-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d12-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d12-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "mental-clarity-d13-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d13-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d13-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d13-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d13-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "mental-clarity-d14-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d14-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d14-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d14-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d14-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "mental-clarity-d15-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d15-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d15-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d15-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d15-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "mental-clarity-d16-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d16-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d16-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d16-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d16-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "mental-clarity-d17-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d17-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d17-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d17-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d17-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "mental-clarity-d18-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d18-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d18-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d18-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d18-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "mental-clarity-d19-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d19-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d19-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d19-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d19-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "mental-clarity-d20-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d20-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d20-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d20-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d20-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "mental-clarity-d21-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d21-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d21-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d21-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d21-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "mental-clarity-d22-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d22-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d22-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d22-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d22-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "mental-clarity-d23-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d23-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d23-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d23-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d23-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "mental-clarity-d24-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d24-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d24-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d24-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d24-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it's not perfect.",
    "tasks": [
      { "id": "mental-clarity-d25-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d25-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d25-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d25-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d25-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "mental-clarity-d26-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d26-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d26-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d26-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d26-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "mental-clarity-d27-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d27-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d27-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d27-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d27-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "mental-clarity-d28-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d28-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d28-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d28-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d28-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "mental-clarity-d29-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d29-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d29-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d29-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d29-t5", "text": "Mentally close open loops for the night." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "mental-clarity-d30-t1", "text": "Choose which thought deserves attention first." },
      { "id": "mental-clarity-d30-t2", "text": "Remove one unnecessary thought from today’s focus." },
      { "id": "mental-clarity-d30-t3", "text": "Separate urgent thoughts from important ones." },
      { "id": "mental-clarity-d30-t4", "text": "Write down a thought instead of keeping it mentally." },
      { "id": "mental-clarity-d30-t5", "text": "Mentally close open loops for the night." }
    ]
  }
]
  },
  {
    "id": "decision-making-confidence",
    "category": "Mental Well-Being",
    "title": "Decision-Making Confidence",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "decision-making-confidence-d1-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d1-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d1-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d1-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d1-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "decision-making-confidence-d2-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d2-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d2-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d2-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d2-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "decision-making-confidence-d3-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d3-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d3-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d3-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d3-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "decision-making-confidence-d4-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d4-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d4-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d4-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d4-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "decision-making-confidence-d5-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d5-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d5-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d5-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d5-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "decision-making-confidence-d6-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d6-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d6-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d6-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d6-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "decision-making-confidence-d7-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d7-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d7-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d7-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d7-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "decision-making-confidence-d8-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d8-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d8-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d8-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d8-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "decision-making-confidence-d9-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d9-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d9-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d9-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d9-t5", "text": "End the day trusting your ability to decide." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "decision-making-confidence-d10-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d10-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d10-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d10-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d10-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "decision-making-confidence-d11-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d11-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d11-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d11-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d11-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "decision-making-confidence-d12-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d12-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d12-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d12-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d12-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "decision-making-confidence-d13-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d13-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d13-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d13-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d13-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "decision-making-confidence-d14-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d14-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d14-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d14-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d14-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "decision-making-confidence-d15-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d15-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d15-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d15-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d15-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "decision-making-confidence-d16-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d16-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d16-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d16-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d16-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "decision-making-confidence-d17-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d17-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d17-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d17-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d17-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "decision-making-confidence-d18-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d18-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d18-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d18-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d18-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "decision-making-confidence-d19-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d19-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d19-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d19-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d19-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "decision-making-confidence-d20-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d20-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d20-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d20-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d20-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "decision-making-confidence-d21-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d21-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d21-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d21-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d21-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "decision-making-confidence-d22-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d22-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d22-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d22-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d22-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "decision-making-confidence-d23-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d23-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d23-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d23-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d23-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "decision-making-confidence-d24-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d24-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d24-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d24-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d24-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "decision-making-confidence-d25-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d25-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d25-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d25-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d25-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "decision-making-confidence-d26-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d26-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d26-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d26-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d26-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "decision-making-confidence-d27-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d27-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d27-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d27-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d27-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "decision-making-confidence-d28-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d28-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d28-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d28-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d28-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "decision-making-confidence-d29-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d29-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d29-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d29-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d29-t5", "text": "End the day trusting your ability to decide." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "decision-making-confidence-d30-t1", "text": "Identify one decision you’re likely to make today." },
      { "id": "decision-making-confidence-d30-t2", "text": "Repeat: “A reasonable decision is better than none.”" },
      { "id": "decision-making-confidence-d30-t3", "text": "Trust your ability to adjust after deciding." },
      { "id": "decision-making-confidence-d30-t4", "text": "Acknowledge one decision you made today." },
      { "id": "decision-making-confidence-d30-t5", "text": "End the day trusting your ability to decide." }
    ]
  }
]
  },
  {
    "id": "motivation-mental-energy",
    "category": "Mental Well-Being",
    "title": "Motivation & Mental Energy",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "motivation-mental-energy-d1-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d1-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d1-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d1-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d1-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "motivation-mental-energy-d2-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d2-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d2-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d2-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d2-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "motivation-mental-energy-d3-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d3-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d3-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d3-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d3-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "motivation-mental-energy-d4-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d4-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d4-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d4-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d4-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "motivation-mental-energy-d5-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d5-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d5-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d5-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d5-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "motivation-mental-energy-d6-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d6-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d6-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d6-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d6-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "motivation-mental-energy-d7-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d7-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d7-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d7-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d7-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "motivation-mental-energy-d8-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d8-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d8-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d8-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d8-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "motivation-mental-energy-d9-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d9-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d9-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d9-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d9-t5", "text": "End the day expecting to begin again." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "motivation-mental-energy-d10-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d10-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d10-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d10-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d10-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "motivation-mental-energy-d11-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d11-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d11-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d11-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d11-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "motivation-mental-energy-d12-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d12-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d12-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d12-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d12-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "motivation-mental-energy-d13-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d13-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d13-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d13-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d13-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "motivation-mental-energy-d14-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d14-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d14-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d14-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d14-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "motivation-mental-energy-d15-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d15-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d15-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d15-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d15-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "motivation-mental-energy-d16-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d16-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d16-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d16-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d16-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "motivation-mental-energy-d17-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d17-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d17-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d17-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d17-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "motivation-mental-energy-d18-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d18-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d18-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d18-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d18-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "motivation-mental-energy-d19-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d19-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d19-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d19-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d19-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "motivation-mental-energy-d20-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d20-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d20-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d20-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d20-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "motivation-mental-energy-d21-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d21-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d21-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d21-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d21-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "motivation-mental-energy-d22-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d22-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d22-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d22-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d22-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "motivation-mental-energy-d23-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d23-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d23-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d23-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d23-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "motivation-mental-energy-d24-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d24-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d24-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d24-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d24-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "motivation-mental-energy-d25-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d25-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d25-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d25-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d25-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "motivation-mental-energy-d26-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d26-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d26-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d26-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d26-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "motivation-mental-energy-d27-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d27-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d27-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d27-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d27-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "motivation-mental-energy-d28-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d28-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d28-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d28-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d28-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "motivation-mental-energy-d29-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d29-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d29-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d29-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d29-t5", "text": "End the day expecting to begin again." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "motivation-mental-energy-d30-t1", "text": "Identify one task worth starting today." },
      { "id": "motivation-mental-energy-d30-t2", "text": "Visualize yourself beginning, not finishing, the task." },
      { "id": "motivation-mental-energy-d30-t3", "text": "Release waiting for motivation to appear." },
      { "id": "motivation-mental-energy-d30-t4", "text": "Acknowledge mental effort you applied today." },
      { "id": "motivation-mental-energy-d30-t5", "text": "End the day expecting to begin again." }
    ]
  }
]
  },
  {
    "id": "creativity-lateral-thinking",
    "category": "Mental Well-Being",
    "title": "Creativity & Lateral Thinking",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d1-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d1-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d1-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d1-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d1-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d2-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d2-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d2-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d2-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d2-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d3-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d3-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d3-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d3-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d3-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d4-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d4-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d4-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d4-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d4-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d5-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d5-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d5-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d5-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d5-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d6-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d6-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d6-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d6-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d6-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d7-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d7-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d7-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d7-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d7-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d8-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d8-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d8-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d8-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d8-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d9-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d9-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d9-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d9-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d9-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d10-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d10-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d10-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d10-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d10-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d11-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d11-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d11-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d11-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d11-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d12-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d12-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d12-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d12-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d12-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d13-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d13-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d13-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d13-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d13-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d14-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d14-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d14-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d14-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d14-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d15-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d15-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d15-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d15-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d15-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d16-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d16-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d16-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d16-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d16-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d17-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d17-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d17-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d17-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d17-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d18-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d18-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d18-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d18-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d18-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d19-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d19-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d19-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d19-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d19-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d20-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d20-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d20-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d20-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d20-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d21-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d21-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d21-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d21-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d21-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d22-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d22-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d22-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d22-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d22-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d23-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d23-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d23-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d23-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d23-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d24-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d24-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d24-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d24-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d24-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d25-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d25-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d25-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d25-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d25-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d26-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d26-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d26-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d26-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d26-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d27-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d27-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d27-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d27-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d27-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d28-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d28-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d28-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d28-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d28-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d29-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d29-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d29-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d29-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d29-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "creativity-lateral-thinking-d30-t1", "text": "Change a routine step slightly this morning." },
      { "id": "creativity-lateral-thinking-d30-t2", "text": "Allow one imperfect or silly idea." },
      { "id": "creativity-lateral-thinking-d30-t3", "text": "Recall one idea that surprised you today." },
      { "id": "creativity-lateral-thinking-d30-t4", "text": "Write or sketch freely for few minutes." },
      { "id": "creativity-lateral-thinking-d30-t5", "text": "End the day valuing curiosity over conclusions." }
    ]
  }
]
  },
  {
    "id": "growth-mindset",
    "category": "Mental Well-Being",
    "title": "Growth Mindset",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "growth-mindset-d1-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d1-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d1-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d1-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d1-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "growth-mindset-d2-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d2-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d2-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d2-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d2-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "growth-mindset-d3-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d3-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d3-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d3-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d3-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "growth-mindset-d4-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d4-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d4-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d4-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d4-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "growth-mindset-d5-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d5-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d5-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d5-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d5-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "growth-mindset-d6-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d6-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d6-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d6-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d6-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "growth-mindset-d7-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d7-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d7-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d7-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d7-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "growth-mindset-d8-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d8-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d8-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d8-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d8-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "growth-mindset-d9-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d9-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d9-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d9-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d9-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "growth-mindset-d10-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d10-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d10-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d10-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d10-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "growth-mindset-d11-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d11-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d11-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d11-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d11-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "growth-mindset-d12-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d12-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d12-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d12-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d12-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "growth-mindset-d13-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d13-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d13-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d13-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d13-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "growth-mindset-d14-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d14-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d14-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d14-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d14-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "growth-mindset-d15-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d15-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d15-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d15-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d15-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "growth-mindset-d16-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d16-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d16-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d16-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d16-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "growth-mindset-d17-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d17-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d17-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d17-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d17-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "growth-mindset-d18-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d18-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d18-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d18-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d18-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "growth-mindset-d19-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d19-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d19-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d19-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d19-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "growth-mindset-d20-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d20-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d20-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d20-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d20-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "growth-mindset-d21-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d21-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d21-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d21-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d21-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "growth-mindset-d22-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d22-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d22-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d22-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d22-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "growth-mindset-d23-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d23-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d23-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d23-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d23-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "growth-mindset-d24-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d24-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d24-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d24-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d24-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "growth-mindset-d25-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d25-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d25-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d25-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d25-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "growth-mindset-d26-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d26-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d26-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d26-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d26-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "growth-mindset-d27-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d27-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d27-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d27-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d27-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "growth-mindset-d28-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d28-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d28-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d28-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d28-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "growth-mindset-d29-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d29-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d29-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d29-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d29-t5", "text": "End the day committed to learning tomorrow." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "growth-mindset-d30-t1", "text": "Decide what you want to learn today." },
      { "id": "growth-mindset-d30-t2", "text": "Repeat: “I can improve through learning and practice.”" },
      { "id": "growth-mindset-d30-t3", "text": "Prepare to learn from feedback today." },
      { "id": "growth-mindset-d30-t4", "text": "Focus on learning progress, not performance outcome." },
      { "id": "growth-mindset-d30-t5", "text": "End the day committed to learning tomorrow." }
    ]
  }
]
  },
  {
    "id": "self-awareness-reflection",
    "category": "Mental Well-Being",
    "title": "Self-Awareness & Reflection",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "self-awareness-reflection-d1-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d1-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d1-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d1-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d1-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "self-awareness-reflection-d2-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d2-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d2-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d2-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d2-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "self-awareness-reflection-d3-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d3-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d3-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d3-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d3-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "self-awareness-reflection-d4-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d4-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d4-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d4-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d4-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "self-awareness-reflection-d5-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d5-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d5-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d5-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d5-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "self-awareness-reflection-d6-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d6-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d6-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d6-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d6-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "self-awareness-reflection-d7-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d7-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d7-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d7-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d7-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "self-awareness-reflection-d8-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d8-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d8-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d8-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d8-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "self-awareness-reflection-d9-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d9-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d9-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d9-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d9-t5", "text": "End the day understanding yourself a little better." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "self-awareness-reflection-d10-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d10-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d10-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d10-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d10-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "self-awareness-reflection-d11-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d11-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d11-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d11-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d11-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "self-awareness-reflection-d12-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d12-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d12-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d12-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d12-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "self-awareness-reflection-d13-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d13-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d13-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d13-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d13-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "self-awareness-reflection-d14-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d14-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d14-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d14-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d14-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "self-awareness-reflection-d15-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d15-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d15-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d15-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d15-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "self-awareness-reflection-d16-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d16-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d16-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d16-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d16-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "self-awareness-reflection-d17-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d17-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d17-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d17-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d17-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "self-awareness-reflection-d18-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d18-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d18-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d18-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d18-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "self-awareness-reflection-d19-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d19-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d19-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d19-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d19-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "self-awareness-reflection-d20-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d20-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d20-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d20-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d20-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "self-awareness-reflection-d21-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d21-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d21-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d21-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d21-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "self-awareness-reflection-d22-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d22-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d22-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d22-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d22-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "self-awareness-reflection-d23-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d23-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d23-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d23-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d23-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "self-awareness-reflection-d24-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d24-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d24-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d24-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d24-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "self-awareness-reflection-d25-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d25-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d25-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d25-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d25-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "self-awareness-reflection-d26-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d26-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d26-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d26-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d26-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "self-awareness-reflection-d27-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d27-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d27-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d27-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d27-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "self-awareness-reflection-d28-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d28-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d28-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d28-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d28-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "self-awareness-reflection-d29-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d29-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d29-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d29-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d29-t5", "text": "End the day understanding yourself a little better." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "self-awareness-reflection-d30-t1", "text": "Identify one personal pattern you want to observe today." },
      { "id": "self-awareness-reflection-d30-t2", "text": "Set an intention to notice your reactions today." },
      { "id": "self-awareness-reflection-d30-t3", "text": "Notice how your thoughts change in different environments." },
      { "id": "self-awareness-reflection-d30-t4", "text": "Identify situations that bring out a habitual behavior." },
      { "id": "self-awareness-reflection-d30-t5", "text": "End the day understanding yourself a little better." }
    ]
  }
]
  },
  {
    "id": "movement-exercise",
    "category": "Physical Well-Being",
    "title": "Movement & Exercise",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "movement-exercise-d1-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d1-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d1-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d1-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d1-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "movement-exercise-d2-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d2-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d2-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d2-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d2-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "movement-exercise-d3-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d3-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d3-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d3-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d3-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "movement-exercise-d4-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d4-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d4-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d4-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d4-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "movement-exercise-d5-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d5-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d5-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d5-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d5-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "movement-exercise-d6-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d6-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d6-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d6-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d6-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "movement-exercise-d7-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d7-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d7-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d7-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d7-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "movement-exercise-d8-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d8-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d8-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d8-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d8-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "movement-exercise-d9-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d9-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d9-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d9-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d9-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "movement-exercise-d10-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d10-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d10-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d10-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d10-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "movement-exercise-d11-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d11-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d11-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d11-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d11-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "movement-exercise-d12-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d12-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d12-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d12-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d12-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "movement-exercise-d13-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d13-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d13-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d13-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d13-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "movement-exercise-d14-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d14-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d14-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d14-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d14-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "movement-exercise-d15-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d15-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d15-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d15-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d15-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "movement-exercise-d16-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d16-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d16-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d16-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d16-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "movement-exercise-d17-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d17-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d17-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d17-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d17-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "movement-exercise-d18-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d18-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d18-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d18-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d18-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "movement-exercise-d19-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d19-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d19-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d19-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d19-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "movement-exercise-d20-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d20-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d20-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d20-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d20-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "movement-exercise-d21-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d21-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d21-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d21-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d21-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "movement-exercise-d22-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d22-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d22-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d22-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d22-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "movement-exercise-d23-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d23-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d23-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d23-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d23-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "movement-exercise-d24-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d24-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d24-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d24-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d24-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "movement-exercise-d25-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d25-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d25-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d25-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d25-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "movement-exercise-d26-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d26-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d26-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d26-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d26-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "movement-exercise-d27-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d27-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d27-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d27-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d27-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "movement-exercise-d28-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d28-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d28-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d28-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d28-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "movement-exercise-d29-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d29-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d29-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d29-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d29-t5", "text": "Do gentle movements to release the day." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "movement-exercise-d30-t1", "text": "Move your body gently for few minutes after waking." },
          { "id": "movement-exercise-d30-t2", "text": "Move your body instead of staying still." },
          { "id": "movement-exercise-d30-t3", "text": "Stand up and move at least once every hour." },
          { "id": "movement-exercise-d30-t4", "text": "Use movement to mark the workday’s end." },
          { "id": "movement-exercise-d30-t5", "text": "Do gentle movements to release the day." }
        ]
      }
    ]
  },
  {
    "id": "nutrition-hydration",
    "category": "Physical Well-Being",
    "title": "Nutrition & Hydration",
     "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "nutrition-hydration-d1-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d1-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d1-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d1-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d1-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "nutrition-hydration-d2-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d2-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d2-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d2-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d2-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "nutrition-hydration-d3-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d3-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d3-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d3-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d3-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "nutrition-hydration-d4-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d4-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d4-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d4-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d4-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "nutrition-hydration-d5-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d5-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d5-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d5-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d5-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "nutrition-hydration-d6-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d6-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d6-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d6-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d6-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "nutrition-hydration-d7-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d7-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d7-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d7-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d7-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "nutrition-hydration-d8-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d8-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d8-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d8-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d8-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "nutrition-hydration-d9-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d9-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d9-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d9-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d9-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "nutrition-hydration-d10-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d10-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d10-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d10-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d10-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "nutrition-hydration-d11-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d11-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d11-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d11-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d11-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "nutrition-hydration-d12-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d12-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d12-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d12-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d12-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "nutrition-hydration-d13-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d13-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d13-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d13-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d13-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "nutrition-hydration-d14-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d14-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d14-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d14-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d14-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "nutrition-hydration-d15-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d15-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d15-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d15-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d15-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "nutrition-hydration-d16-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d16-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d16-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d16-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d16-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "nutrition-hydration-d17-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d17-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d17-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d17-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d17-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "nutrition-hydration-d18-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d18-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d18-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d18-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d18-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "nutrition-hydration-d19-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d19-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d19-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d19-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d19-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "nutrition-hydration-d20-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d20-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d20-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d20-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d20-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "nutrition-hydration-d21-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d21-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d21-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d21-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d21-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "nutrition-hydration-d22-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d22-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d22-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d22-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d22-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "nutrition-hydration-d23-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d23-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d23-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d23-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d23-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "nutrition-hydration-d24-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d24-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d24-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d24-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d24-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "nutrition-hydration-d25-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d25-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d25-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d25-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d25-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "nutrition-hydration-d26-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d26-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d26-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d26-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d26-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "nutrition-hydration-d27-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d27-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d27-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d27-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d27-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "nutrition-hydration-d28-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d28-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d28-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d28-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d28-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "nutrition-hydration-d29-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d29-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d29-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d29-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d29-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "nutrition-hydration-d30-t1", "text": "Drink a glass of water after waking up." },
          { "id": "nutrition-hydration-d30-t2", "text": "Include one whole food in your morning intake." },
          { "id": "nutrition-hydration-d30-t3", "text": "Plan when you’ll drink water at work." },
          { "id": "nutrition-hydration-d30-t4", "text": "Pause work to eat instead of multitasking." },
          { "id": "nutrition-hydration-d30-t5", "text": "End the day having eaten and hydrated adequately." }
        ]
      }
    ]
  },
  {
    "id": "sleep-recovery",
    "category": "Physical Well-Being",
    "title": "Sleep & Recovery",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "sleep-recovery-d1-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d1-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d1-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d1-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d1-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "sleep-recovery-d2-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d2-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d2-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d2-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d2-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "sleep-recovery-d3-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d3-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d3-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d3-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d3-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "sleep-recovery-d4-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d4-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d4-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d4-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d4-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "sleep-recovery-d5-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d5-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d5-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d5-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d5-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "sleep-recovery-d6-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d6-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d6-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d6-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d6-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "sleep-recovery-d7-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d7-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d7-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d7-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d7-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "sleep-recovery-d8-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d8-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d8-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d8-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d8-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "sleep-recovery-d9-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d9-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d9-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d9-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d9-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "sleep-recovery-d10-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d10-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d10-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d10-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d10-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "sleep-recovery-d11-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d11-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d11-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d11-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d11-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "sleep-recovery-d12-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d12-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d12-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d12-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d12-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "sleep-recovery-d13-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d13-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d13-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d13-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d13-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "sleep-recovery-d14-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d14-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d14-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d14-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d14-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "sleep-recovery-d15-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d15-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d15-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d15-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d15-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "sleep-recovery-d16-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d16-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d16-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d16-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d16-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "sleep-recovery-d17-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d17-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d17-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d17-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d17-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "sleep-recovery-d18-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d18-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d18-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d18-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d18-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "sleep-recovery-d19-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d19-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d19-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d19-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d19-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "sleep-recovery-d20-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d20-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d20-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d20-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d20-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "sleep-recovery-d21-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d21-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d21-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d21-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d21-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "sleep-recovery-d22-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d22-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d22-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d22-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d22-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "sleep-recovery-d23-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d23-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d23-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d23-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d23-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "sleep-recovery-d24-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d24-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d24-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d24-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d24-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "sleep-recovery-d25-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d25-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d25-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d25-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d25-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "sleep-recovery-d26-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d26-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d26-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d26-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d26-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "sleep-recovery-d27-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d27-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d27-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d27-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d27-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "sleep-recovery-d28-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d28-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d28-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d28-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d28-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "sleep-recovery-d29-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d29-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d29-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d29-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d29-t5", "text": "Limit screens before bedtime." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "sleep-recovery-d30-t1", "text": "Get out of bed within ten minutes." },
          { "id": "sleep-recovery-d30-t2", "text": "Note how rested you feel upon waking." },
          { "id": "sleep-recovery-d30-t3", "text": "Avoid pushing through extreme tiredness." },
          { "id": "sleep-recovery-d30-t4", "text": "Plan a wind-down start time this evening." },
          { "id": "sleep-recovery-d30-t5", "text": "Limit screens before bedtime." }
        ]
      }
    ]
  },
  {
    "id": "energy-management",
    "category": "Physical Well-Being",
    "title": "Energy Management",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "energy-management-d1-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d1-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d1-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d1-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d1-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "energy-management-d2-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d2-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d2-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d2-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d2-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "energy-management-d3-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d3-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d3-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d3-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d3-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "energy-management-d4-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d4-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d4-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d4-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d4-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "energy-management-d5-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d5-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d5-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d5-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d5-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "energy-management-d6-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d6-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d6-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d6-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d6-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "energy-management-d7-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d7-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d7-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d7-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d7-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "energy-management-d8-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d8-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d8-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d8-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d8-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "energy-management-d9-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d9-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d9-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d9-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d9-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "energy-management-d10-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d10-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d10-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d10-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d10-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "energy-management-d11-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d11-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d11-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d11-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d11-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "energy-management-d12-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d12-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d12-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d12-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d12-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "energy-management-d13-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d13-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d13-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d13-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d13-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "energy-management-d14-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d14-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d14-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d14-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d14-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "energy-management-d15-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d15-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d15-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d15-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d15-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "energy-management-d16-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d16-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d16-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d16-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d16-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "energy-management-d17-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d17-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d17-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d17-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d17-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "energy-management-d18-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d18-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d18-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d18-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d18-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "energy-management-d19-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d19-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d19-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d19-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d19-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "energy-management-d20-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d20-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d20-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d20-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d20-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "energy-management-d21-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d21-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d21-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d21-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d21-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "energy-management-d22-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d22-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d22-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d22-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d22-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "energy-management-d23-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d23-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d23-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d23-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d23-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "energy-management-d24-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d24-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d24-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d24-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d24-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "energy-management-d25-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d25-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d25-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d25-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d25-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "energy-management-d26-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d26-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d26-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d26-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d26-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "energy-management-d27-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d27-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d27-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d27-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d27-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "energy-management-d28-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d28-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d28-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d28-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d28-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "energy-management-d29-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d29-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d29-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d29-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d29-t5", "text": "End the day without forcing extra output." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "energy-management-d30-t1", "text": "Avoid starting the day with energy-draining activities." },
          { "id": "energy-management-d30-t2", "text": "Preserve energy by simplifying morning choices." },
          { "id": "energy-management-d30-t3", "text": "Work in focused blocks instead of constant effort." },
          { "id": "energy-management-d30-t4", "text": "Identify what helped preserve energy today." },
          { "id": "energy-management-d30-t5", "text": "End the day without forcing extra output." }
        ]
      }
    ]
  },
  {
    "id": "posture-body-awareness",
    "category": "Physical Well-Being",
    "title": "Posture & Body Awareness",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "posture-body-awareness-d1-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d1-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d1-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d1-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d1-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "posture-body-awareness-d2-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d2-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d2-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d2-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d2-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "posture-body-awareness-d3-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d3-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d3-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d3-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d3-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "posture-body-awareness-d4-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d4-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d4-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d4-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d4-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "posture-body-awareness-d5-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d5-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d5-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d5-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d5-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "posture-body-awareness-d6-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d6-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d6-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d6-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d6-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "posture-body-awareness-d7-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d7-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d7-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d7-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d7-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "posture-body-awareness-d8-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d8-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d8-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d8-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d8-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "posture-body-awareness-d9-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d9-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d9-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d9-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d9-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "posture-body-awareness-d10-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d10-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d10-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d10-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d10-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "posture-body-awareness-d11-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d11-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d11-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d11-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d11-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },
  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "posture-body-awareness-d12-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d12-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d12-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d12-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d12-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "posture-body-awareness-d13-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d13-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d13-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d13-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d13-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "posture-body-awareness-d14-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d14-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d14-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d14-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d14-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "posture-body-awareness-d15-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d15-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d15-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d15-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d15-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "posture-body-awareness-d16-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d16-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d16-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d16-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d16-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "posture-body-awareness-d17-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d17-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d17-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d17-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d17-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "posture-body-awareness-d18-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d18-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d18-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d18-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d18-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "posture-body-awareness-d19-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d19-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d19-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d19-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d19-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "posture-body-awareness-d20-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d20-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d20-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d20-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d20-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "posture-body-awareness-d21-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d21-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d21-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d21-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d21-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "posture-body-awareness-d22-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d22-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d22-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d22-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d22-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "posture-body-awareness-d23-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d23-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d23-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d23-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d23-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "posture-body-awareness-d24-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d24-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d24-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d24-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d24-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "posture-body-awareness-d25-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d25-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d25-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d25-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d25-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "posture-body-awareness-d26-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d26-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d26-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d26-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d26-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "posture-body-awareness-d27-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d27-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d27-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d27-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d27-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "posture-body-awareness-d28-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d28-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d28-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d28-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d28-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "posture-body-awareness-d29-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d29-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d29-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d29-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d29-t5", "text": "End the day aware of how your body was positioned." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "posture-body-awareness-d30-t1", "text": "Adjust your posture while brushing teeth or washing." },
      { "id": "posture-body-awareness-d30-t2", "text": "Set your shoulders back and down once this morning." },
      { "id": "posture-body-awareness-d30-t3", "text": "Align your body before starting work tasks." },
      { "id": "posture-body-awareness-d30-t4", "text": "Reset posture when changing tasks." },
      { "id": "posture-body-awareness-d30-t5", "text": "End the day aware of how your body was positioned." }
    ]
  }
  ]
  },

  {
    "id": "breathing-oxygenation",
    "category": "Physical Well-Being",
    "title": "Breathing & Oxygenation",
   "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "breathing-oxygenation-d1-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d1-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d1-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d1-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d1-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "breathing-oxygenation-d2-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d2-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d2-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d2-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d2-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "breathing-oxygenation-d3-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d3-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d3-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d3-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d3-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "breathing-oxygenation-d4-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d4-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d4-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d4-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d4-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "breathing-oxygenation-d5-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d5-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d5-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d5-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d5-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "breathing-oxygenation-d6-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d6-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d6-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d6-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d6-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "breathing-oxygenation-d7-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d7-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d7-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d7-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d7-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "breathing-oxygenation-d8-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d8-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d8-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d8-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d8-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "breathing-oxygenation-d9-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d9-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d9-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d9-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d9-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "breathing-oxygenation-d10-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d10-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d10-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d10-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d10-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "breathing-oxygenation-d11-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d11-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d11-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d11-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d11-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "breathing-oxygenation-d12-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d12-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d12-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d12-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d12-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "breathing-oxygenation-d13-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d13-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d13-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d13-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d13-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "breathing-oxygenation-d14-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d14-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d14-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d14-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d14-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "breathing-oxygenation-d15-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d15-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d15-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d15-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d15-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "breathing-oxygenation-d16-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d16-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d16-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d16-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d16-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "breathing-oxygenation-d17-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d17-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d17-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d17-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d17-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "breathing-oxygenation-d18-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d18-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d18-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d18-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d18-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "breathing-oxygenation-d19-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d19-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d19-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d19-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d19-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "breathing-oxygenation-d20-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d20-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d20-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d20-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d20-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "breathing-oxygenation-d21-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d21-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d21-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d21-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d21-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "breathing-oxygenation-d22-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d22-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d22-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d22-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d22-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "breathing-oxygenation-d23-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d23-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d23-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d23-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d23-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "breathing-oxygenation-d24-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d24-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d24-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d24-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d24-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "breathing-oxygenation-d25-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d25-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d25-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d25-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d25-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "breathing-oxygenation-d26-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d26-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d26-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d26-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d26-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "breathing-oxygenation-d27-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d27-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d27-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d27-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d27-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "breathing-oxygenation-d28-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d28-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d28-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d28-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d28-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "breathing-oxygenation-d29-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d29-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d29-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d29-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d29-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "breathing-oxygenation-d30-t1", "text": "Take 5 slow deep breaths right after getting out of bed." },
          { "id": "breathing-oxygenation-d30-t2", "text": "Breath only through your nose while you walk or comute to work." },
          { "id": "breathing-oxygenation-d30-t3", "text": "Before an important task, take 5 calming breaths." },
          { "id": "breathing-oxygenation-d30-t4", "text": "Take 10 slow breaths to mentally close the workday." },
          { "id": "breathing-oxygenation-d30-t5", "text": "In bed, breathe slowly and quietly through the nose for 1–3 minutes before sleep." }
        ]
      }
    ] 
  },
  {
    "id": "physical-resilience",
    "category": "Physical Well-Being",
    "title": "Physical Resilience",
   "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "physical-resilience-d1-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d1-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d1-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d1-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d1-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "physical-resilience-d2-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d2-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d2-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d2-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d2-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "physical-resilience-d3-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d3-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d3-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d3-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d3-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "physical-resilience-d4-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d4-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d4-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d4-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d4-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "physical-resilience-d5-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d5-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d5-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d5-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d5-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "physical-resilience-d6-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d6-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d6-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d6-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d6-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "physical-resilience-d7-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d7-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d7-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d7-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d7-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "physical-resilience-d8-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d8-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d8-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d8-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d8-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "physical-resilience-d9-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d9-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d9-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d9-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d9-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "physical-resilience-d10-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d10-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d10-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d10-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d10-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "physical-resilience-d11-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d11-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d11-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d11-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d11-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "physical-resilience-d12-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d12-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d12-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d12-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d12-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "physical-resilience-d13-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d13-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d13-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d13-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d13-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "physical-resilience-d14-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d14-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d14-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d14-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d14-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "physical-resilience-d15-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d15-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d15-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d15-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d15-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "physical-resilience-d16-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d16-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d16-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d16-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d16-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "physical-resilience-d17-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d17-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d17-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d17-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d17-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "physical-resilience-d18-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d18-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d18-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d18-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d18-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "physical-resilience-d19-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d19-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d19-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d19-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d19-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "physical-resilience-d20-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d20-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d20-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d20-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d20-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "physical-resilience-d21-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d21-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d21-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d21-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d21-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "physical-resilience-d22-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d22-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d22-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d22-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d22-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "physical-resilience-d23-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d23-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d23-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d23-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d23-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "physical-resilience-d24-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d24-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d24-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d24-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d24-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "physical-resilience-d25-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d25-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d25-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d25-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d25-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "physical-resilience-d26-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d26-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d26-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d26-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d26-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "physical-resilience-d27-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d27-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d27-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d27-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d27-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "physical-resilience-d28-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d28-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d28-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d28-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d28-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "physical-resilience-d29-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d29-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d29-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d29-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d29-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "physical-resilience-d30-t1", "text": "In the morning take a cool or slightly cool face rinse to stimulate resilience." },
          { "id": "physical-resilience-d30-t2", "text": "Carry a bag or backpack in the non-dominant hand for a short period." },
          { "id": "physical-resilience-d30-t3", "text": "During the day sit on the front half of your chair for 5 minutes to challenge postural endurance." },
          { "id": "physical-resilience-d30-t4", "text": "After work do 60 seconds of slow joint circles (ankles, wrists, shoulders, and hips)." },
          { "id": "physical-resilience-d30-t5", "text": "End the day acknowledging one physical discomfort you tolerated and recovered from." }
        ]
      }
    ]
  },
  {
    "id": "functional-strength",
    "category": "Physical Well-Being",
    "title": "Functional Strength",
   "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "functional-strength-d1-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d1-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d1-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d1-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d1-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "functional-strength-d2-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d2-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d2-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d2-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d2-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "functional-strength-d3-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d3-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d3-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d3-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d3-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "functional-strength-d4-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d4-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d4-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d4-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d4-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "functional-strength-d5-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d5-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d5-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d5-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d5-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "functional-strength-d6-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d6-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d6-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d6-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d6-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "functional-strength-d7-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d7-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d7-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d7-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d7-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "functional-strength-d8-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d8-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d8-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d8-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d8-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "functional-strength-d9-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d9-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d9-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d9-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d9-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "functional-strength-d10-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d10-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d10-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d10-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d10-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "functional-strength-d11-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d11-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d11-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d11-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d11-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "functional-strength-d12-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d12-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d12-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d12-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d12-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "functional-strength-d13-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d13-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d13-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d13-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d13-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "functional-strength-d14-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d14-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d14-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d14-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d14-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "functional-strength-d15-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d15-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d15-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d15-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d15-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "functional-strength-d16-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d16-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d16-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d16-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d16-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "functional-strength-d17-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d17-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d17-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d17-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d17-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "functional-strength-d18-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d18-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d18-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d18-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d18-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "functional-strength-d19-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d19-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d19-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d19-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d19-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "functional-strength-d20-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d20-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d20-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d20-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d20-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "functional-strength-d21-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d21-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d21-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d21-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d21-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "functional-strength-d22-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d22-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d22-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d22-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d22-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "functional-strength-d23-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d23-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d23-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d23-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d23-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "functional-strength-d24-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d24-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d24-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d24-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d24-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "functional-strength-d25-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d25-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d25-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d25-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d25-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "functional-strength-d26-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d26-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d26-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d26-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d26-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "functional-strength-d27-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d27-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d27-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d27-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d27-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "functional-strength-d28-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d28-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d28-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d28-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d28-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "functional-strength-d29-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d29-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d29-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d29-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d29-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "functional-strength-d30-t1", "text": "In the morning stand up from bed or a chair slowly without using your hands." },
          { "id": "functional-strength-d30-t2", "text": "On the way to work walk while carrying something slightly awkward, a bag or a package." },
          { "id": "functional-strength-d30-t3", "text": "During the day pull something toward you using both hands." },
          { "id": "functional-strength-d30-t4", "text": "When coming from work put your shoes and bag using controlled movement." },
          { "id": "functional-strength-d30-t5", "text": "Before bed notice one daily task that required strength today." }
        ]
      }
    ]
  },
  {
    "id": "healthy-habits-routines",
    "category": "Physical Well-Being",
    "title": "Healthy Habits & Routines",
   "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "healthy-habits-routines-d1-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d1-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d1-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d1-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d1-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "healthy-habits-routines-d2-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d2-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d2-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d2-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d2-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "healthy-habits-routines-d3-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d3-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d3-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d3-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d3-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "healthy-habits-routines-d4-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d4-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d4-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d4-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d4-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "healthy-habits-routines-d5-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d5-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d5-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d5-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d5-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "healthy-habits-routines-d6-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d6-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d6-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d6-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d6-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "healthy-habits-routines-d7-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d7-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d7-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d7-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d7-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "healthy-habits-routines-d8-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d8-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d8-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d8-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d8-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "healthy-habits-routines-d9-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d9-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d9-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d9-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d9-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "healthy-habits-routines-d10-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d10-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d10-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d10-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d10-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "healthy-habits-routines-d11-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d11-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d11-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d11-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d11-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "healthy-habits-routines-d12-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d12-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d12-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d12-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d12-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "healthy-habits-routines-d13-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d13-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d13-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d13-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d13-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "healthy-habits-routines-d14-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d14-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d14-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d14-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d14-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "healthy-habits-routines-d15-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d15-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d15-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d15-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d15-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "healthy-habits-routines-d16-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d16-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d16-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d16-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d16-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "healthy-habits-routines-d17-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d17-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d17-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d17-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d17-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "healthy-habits-routines-d18-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d18-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d18-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d18-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d18-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "healthy-habits-routines-d19-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d19-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d19-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d19-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d19-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "healthy-habits-routines-d20-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d20-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d20-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d20-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d20-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "healthy-habits-routines-d21-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d21-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d21-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d21-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d21-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "healthy-habits-routines-d22-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d22-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d22-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d22-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d22-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "healthy-habits-routines-d23-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d23-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d23-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d23-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d23-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "healthy-habits-routines-d24-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d24-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d24-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d24-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d24-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "healthy-habits-routines-d25-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d25-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d25-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d25-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d25-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "healthy-habits-routines-d26-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d26-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d26-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d26-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d26-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "healthy-habits-routines-d27-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d27-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d27-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d27-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d27-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "healthy-habits-routines-d28-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d28-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d28-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d28-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d28-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "healthy-habits-routines-d29-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d29-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d29-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d29-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d29-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "healthy-habits-routines-d30-t1", "text": "In the morning avoid checking your phone until after your basic routine is done." },
          { "id": "healthy-habits-routines-d30-t2", "text": "Keep your shoulders relaxed and jaw unclenched while commuting to work." },
          { "id": "healthy-habits-routines-d30-t3", "text": "Take a short break before you feel tired, not after." },
          { "id": "healthy-habits-routines-d30-t4", "text": "When coming home pause at the door and take one slow breath before entering." },
          { "id": "healthy-habits-routines-d30-t5", "text": "Go to bed when you first notice real sleepiness, not after “one more thing”." }
        ]
      }
    ]
  },
  {
    "id": "weight-body-composition",
    "category": "Physical Well-Being",
    "title": "Weight & Body Composition",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "weight-body-composition-d1-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d1-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d1-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d1-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d1-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "weight-body-composition-d2-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d2-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d2-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d2-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d2-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "weight-body-composition-d3-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d3-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d3-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d3-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d3-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "weight-body-composition-d4-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d4-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d4-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d4-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d4-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "weight-body-composition-d5-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d5-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d5-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d5-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d5-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "weight-body-composition-d6-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d6-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d6-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d6-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d6-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "weight-body-composition-d7-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d7-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d7-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d7-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d7-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "weight-body-composition-d8-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d8-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d8-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d8-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d8-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "weight-body-composition-d9-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d9-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d9-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d9-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d9-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "weight-body-composition-d10-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d10-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d10-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d10-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d10-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "weight-body-composition-d11-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d11-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d11-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d11-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d11-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "weight-body-composition-d12-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d12-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d12-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d12-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d12-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "weight-body-composition-d13-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d13-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d13-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d13-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d13-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "weight-body-composition-d14-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d14-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d14-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d14-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d14-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "weight-body-composition-d15-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d15-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d15-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d15-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d15-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "weight-body-composition-d16-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d16-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d16-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d16-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d16-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "weight-body-composition-d17-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d17-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d17-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d17-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d17-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "weight-body-composition-d18-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d18-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d18-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d18-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d18-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "weight-body-composition-d19-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d19-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d19-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d19-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d19-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "weight-body-composition-d20-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d20-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d20-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d20-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d20-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "weight-body-composition-d21-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d21-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d21-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d21-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d21-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "weight-body-composition-d22-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d22-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d22-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d22-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d22-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "weight-body-composition-d23-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d23-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d23-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d23-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d23-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "weight-body-composition-d24-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d24-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d24-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d24-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d24-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "weight-body-composition-d25-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d25-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d25-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d25-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d25-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "weight-body-composition-d26-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d26-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d26-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d26-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d26-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "weight-body-composition-d27-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d27-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d27-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d27-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d27-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "weight-body-composition-d28-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d28-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d28-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d28-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d28-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "weight-body-composition-d29-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d29-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d29-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d29-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d29-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "weight-body-composition-d30-t1", "text": "First thing in the morning briefly notice how your body feels today, it feels great!" },
          { "id": "weight-body-composition-d30-t2", "text": "Notice hunger vs. habit before consuming anything." },
          { "id": "weight-body-composition-d30-t3", "text": "At lunch notice if you are eating for energy or for emotion (just notice)." },
          { "id": "weight-body-composition-d30-t4", "text": "When coming from work change clothes and move your body for 5 minutes instead of sitting immediately." },
          { "id": "weight-body-composition-d30-t5", "text": "Notice one thing you did today that supported your body composition." }
        ]
      }
    ]
  },
  {
    "id": "detoxification-cleansing",
    "category": "Physical Well-Being",
    "title": "Detoxification & Cleansing",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "detoxification-cleansing-d1-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d1-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d1-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d1-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d1-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "detoxification-cleansing-d2-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d2-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d2-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d2-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d2-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "detoxification-cleansing-d3-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d3-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d3-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d3-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d3-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "detoxification-cleansing-d4-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d4-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d4-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d4-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d4-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "detoxification-cleansing-d5-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d5-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d5-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d5-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d5-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "detoxification-cleansing-d6-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d6-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d6-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d6-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d6-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "detoxification-cleansing-d7-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d7-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d7-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d7-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d7-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "detoxification-cleansing-d8-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d8-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d8-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d8-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d8-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "detoxification-cleansing-d9-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d9-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d9-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d9-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d9-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "detoxification-cleansing-d10-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d10-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d10-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d10-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d10-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "detoxification-cleansing-d11-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d11-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d11-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d11-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d11-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "detoxification-cleansing-d12-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d12-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d12-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d12-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d12-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "detoxification-cleansing-d13-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d13-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d13-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d13-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d13-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "detoxification-cleansing-d14-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d14-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d14-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d14-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d14-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "detoxification-cleansing-d15-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d15-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d15-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d15-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d15-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "detoxification-cleansing-d16-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d16-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d16-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d16-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d16-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "detoxification-cleansing-d17-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d17-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d17-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d17-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d17-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "detoxification-cleansing-d18-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d18-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d18-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d18-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d18-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "detoxification-cleansing-d19-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d19-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d19-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d19-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d19-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "detoxification-cleansing-d20-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d20-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d20-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d20-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d20-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "detoxification-cleansing-d21-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d21-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d21-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d21-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d21-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "detoxification-cleansing-d22-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d22-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d22-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d22-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d22-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "detoxification-cleansing-d23-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d23-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d23-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d23-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d23-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "detoxification-cleansing-d24-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d24-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d24-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d24-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d24-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "detoxification-cleansing-d25-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d25-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d25-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d25-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d25-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "detoxification-cleansing-d26-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d26-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d26-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d26-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d26-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "detoxification-cleansing-d27-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d27-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d27-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d27-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d27-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "detoxification-cleansing-d28-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d28-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d28-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d28-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d28-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "detoxification-cleansing-d29-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d29-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d29-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d29-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d29-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "detoxification-cleansing-d30-t1", "text": "Drink a full glass of water right after waking." },
          { "id": "detoxification-cleansing-d30-t2", "text": "Expose your skin or face to natural light for a minute and welcome the new day." },
          { "id": "detoxification-cleansing-d30-t3", "text": "Clear or organize one small physical space (desk, bag, inbox)." },
          { "id": "detoxification-cleansing-d30-t4", "text": "Change into clean, comfortable clothes as soon as you get home." },
          { "id": "detoxification-cleansing-d30-t5", "text": "At the end of the day, mentally notice one thing you let go of." }
        ]
      }
    ]
  },
  {
    "id": "sensory-health",
    "category": "Physical Well-Being",
    "title": "Sensory Health",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "sensory-health-d1-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d1-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d1-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d1-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d1-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "sensory-health-d2-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d2-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d2-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d2-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d2-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "sensory-health-d3-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d3-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d3-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d3-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d3-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "sensory-health-d4-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d4-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d4-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d4-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d4-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "sensory-health-d5-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d5-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d5-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d5-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d5-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "sensory-health-d6-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d6-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d6-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d6-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d6-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "sensory-health-d7-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d7-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d7-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d7-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d7-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "sensory-health-d8-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d8-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d8-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d8-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d8-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "sensory-health-d9-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d9-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d9-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d9-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d9-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "sensory-health-d10-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d10-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d10-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d10-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d10-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "sensory-health-d11-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d11-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d11-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d11-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d11-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "sensory-health-d12-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d12-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d12-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d12-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d12-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "sensory-health-d13-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d13-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d13-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d13-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d13-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "sensory-health-d14-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d14-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d14-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d14-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d14-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "sensory-health-d15-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d15-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d15-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d15-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d15-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "sensory-health-d16-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d16-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d16-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d16-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d16-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "sensory-health-d17-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d17-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d17-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d17-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d17-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "sensory-health-d18-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d18-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d18-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d18-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d18-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "sensory-health-d19-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d19-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d19-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d19-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d19-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "sensory-health-d20-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d20-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d20-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d20-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d20-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "sensory-health-d21-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d21-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d21-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d21-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d21-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "sensory-health-d22-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d22-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d22-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d22-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d22-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "sensory-health-d23-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d23-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d23-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d23-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d23-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "sensory-health-d24-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d24-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d24-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d24-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d24-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "sensory-health-d25-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d25-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d25-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d25-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d25-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "sensory-health-d26-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d26-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d26-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d26-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d26-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "sensory-health-d27-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d27-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d27-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d27-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d27-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "sensory-health-d28-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d28-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d28-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d28-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d28-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "sensory-health-d29-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d29-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d29-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d29-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d29-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "sensory-health-d30-t1", "text": "Right after waking, look at daylight or out a window for 2 minutes before any screen." },
          { "id": "sensory-health-d30-t2", "text": "While getting dressed in the morning, notice the feeling of clothes on your skin." },
          { "id": "sensory-health-d30-t3", "text": "During the commute to work relax your jaw and shoulders and feel your body weight." },
          { "id": "sensory-health-d30-t4", "text": "At work touch your desk or chair consciously and feel its texture for a few seconds." },
          { "id": "sensory-health-d30-t5", "text": "Before going to bed notice one pleasant or neutral physical sensation." }
        ]
      }
    ]
  },
  {
    "id": "purpose-meaning",
    "category": "Spiritual Well-Being",
    "title": "Purpose & Meaning",
    "days": [
      {
        "day": 1,
        "affirmation": "I am capable of growth.",
        "tasks": [
          { "id": "purpose-meaning-d1-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d1-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d1-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d1-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d1-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 2,
        "affirmation": "I choose progress today.",
        "tasks": [
          { "id": "purpose-meaning-d2-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d2-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d2-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d2-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d2-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 3,
        "affirmation": "I trust myself to learn and improve.",
        "tasks": [
          { "id": "purpose-meaning-d3-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d3-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d3-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d3-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d3-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 4,
        "affirmation": "I am resilient and steady.",
        "tasks": [
          { "id": "purpose-meaning-d4-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d4-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d4-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d4-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d4-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 5,
        "affirmation": "I honor my commitments to myself.",
        "tasks": [
          { "id": "purpose-meaning-d5-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d5-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d5-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d5-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d5-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 6,
        "affirmation": "I show up with intention.",
        "tasks": [
          { "id": "purpose-meaning-d6-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d6-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d6-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d6-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d6-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 7,
        "affirmation": "I am consistent, even in small steps.",
        "tasks": [
          { "id": "purpose-meaning-d7-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d7-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d7-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d7-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d7-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 8,
        "affirmation": "I can do hard things.",
        "tasks": [
          { "id": "purpose-meaning-d8-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d8-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d8-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d8-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d8-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 9,
        "affirmation": "I am focused and present.",
        "tasks": [
          { "id": "purpose-meaning-d9-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d9-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d9-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d9-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d9-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 10,
        "affirmation": "I am proud of my effort.",
        "tasks": [
          { "id": "purpose-meaning-d10-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d10-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d10-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d10-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d10-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 11,
        "affirmation": "I create positive change daily.",
        "tasks": [
          { "id": "purpose-meaning-d11-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d11-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d11-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d11-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d11-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 12,
        "affirmation": "I am patient with my process.",
        "tasks": [
          { "id": "purpose-meaning-d12-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d12-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d12-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d12-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d12-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 13,
        "affirmation": "I grow stronger with every repetition.",
        "tasks": [
          { "id": "purpose-meaning-d13-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d13-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d13-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d13-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d13-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 14,
        "affirmation": "I deserve a life I love.",
        "tasks": [
          { "id": "purpose-meaning-d14-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d14-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d14-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d14-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d14-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 15,
        "affirmation": "I build habits that support me.",
        "tasks": [
          { "id": "purpose-meaning-d15-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d15-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d15-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d15-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d15-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 16,
        "affirmation": "I take responsibility with compassion.",
        "tasks": [
          { "id": "purpose-meaning-d16-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d16-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d16-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d16-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d16-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 17,
        "affirmation": "I act with clarity and purpose.",
        "tasks": [
          { "id": "purpose-meaning-d17-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d17-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d17-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d17-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d17-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 18,
        "affirmation": "I am calm, capable, and grounded.",
        "tasks": [
          { "id": "purpose-meaning-d18-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d18-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d18-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d18-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d18-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 19,
        "affirmation": "I improve one day at a time.",
        "tasks": [
          { "id": "purpose-meaning-d19-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d19-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d19-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d19-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d19-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 20,
        "affirmation": "I celebrate my progress.",
        "tasks": [
          { "id": "purpose-meaning-d20-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d20-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d20-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d20-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d20-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 21,
        "affirmation": "I make time for what matters.",
        "tasks": [
          { "id": "purpose-meaning-d21-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d21-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d21-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d21-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d21-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 22,
        "affirmation": "I listen to what I need.",
        "tasks": [
          { "id": "purpose-meaning-d22-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d22-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d22-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d22-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d22-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 23,
        "affirmation": "I am disciplined and kind to myself.",
        "tasks": [
          { "id": "purpose-meaning-d23-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d23-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d23-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d23-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d23-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 24,
        "affirmation": "I choose healthy choices today.",
        "tasks": [
          { "id": "purpose-meaning-d24-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d24-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d24-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d24-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d24-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 25,
        "affirmation": "I keep going, even when it’s not perfect.",
        "tasks": [
          { "id": "purpose-meaning-d25-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d25-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d25-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d25-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d25-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 26,
        "affirmation": "I trust the process of becoming.",
        "tasks": [
          { "id": "purpose-meaning-d26-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d26-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d26-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d26-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d26-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 27,
        "affirmation": "I am motivated by my values.",
        "tasks": [
          { "id": "purpose-meaning-d27-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d27-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d27-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d27-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d27-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 28,
        "affirmation": "I am grateful for this opportunity to grow.",
        "tasks": [
          { "id": "purpose-meaning-d28-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d28-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d28-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d28-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d28-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 29,
        "affirmation": "I finish what I start.",
        "tasks": [
          { "id": "purpose-meaning-d29-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d29-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d29-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d29-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d29-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      },
      {
        "day": 30,
        "affirmation": "I am becoming my best self.",
        "tasks": [
          { "id": "purpose-meaning-d30-t1", "text": "Write down one reason you're grateful to be alive today—something specific, even small." },
          { "id": "purpose-meaning-d30-t2", "text": "Notice one beautiful thing on your way—a tree, a face, the sky. Let it fill you." },
          { "id": "purpose-meaning-d30-t3", "text": "Do one thing today as if it were sacred—a conversation, an email, a moment of focus." },
          { "id": "purpose-meaning-d30-t4", "text": "When coming back from work say aloud: \"I am more than my productivity. I am loved.\"" },
          { "id": "purpose-meaning-d30-t5", "text": "Before go to bed place your hand on your heart and say: \"My life is a gift. I am becoming who I was meant to be.\"" }
        ]
      }
    ]
  },
  {
    "id": "gratitude-appreciation",
    "category": "Spiritual Well-Being",
    "title": "Gratitude & Appreciation",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "gratitude-appreciation-d1-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d1-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d1-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d1-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d1-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "gratitude-appreciation-d2-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d2-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d2-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d2-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d2-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "gratitude-appreciation-d3-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d3-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d3-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d3-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d3-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "gratitude-appreciation-d4-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d4-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d4-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d4-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d4-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "gratitude-appreciation-d5-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d5-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d5-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d5-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d5-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "gratitude-appreciation-d6-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d6-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d6-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d6-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d6-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "gratitude-appreciation-d7-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d7-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d7-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d7-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d7-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "gratitude-appreciation-d8-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d8-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d8-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d8-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d8-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "gratitude-appreciation-d9-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d9-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d9-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d9-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d9-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "gratitude-appreciation-d10-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d10-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d10-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d10-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d10-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "gratitude-appreciation-d11-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d11-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d11-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d11-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d11-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },
  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "gratitude-appreciation-d12-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d12-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d12-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d12-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d12-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "gratitude-appreciation-d13-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d13-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d13-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d13-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d13-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "gratitude-appreciation-d14-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d14-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d14-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d14-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d14-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "gratitude-appreciation-d15-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d15-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d15-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d15-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d15-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "gratitude-appreciation-d16-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d16-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d16-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d16-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d16-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "gratitude-appreciation-d17-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d17-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d17-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d17-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d17-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "gratitude-appreciation-d18-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d18-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d18-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d18-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d18-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "gratitude-appreciation-d19-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d19-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d19-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d19-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d19-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "gratitude-appreciation-d20-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d20-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d20-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d20-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d20-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "gratitude-appreciation-d21-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d21-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d21-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d21-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d21-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "gratitude-appreciation-d22-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d22-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d22-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d22-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d22-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "gratitude-appreciation-d23-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d23-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d23-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d23-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d23-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "gratitude-appreciation-d24-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d24-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d24-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d24-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d24-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "gratitude-appreciation-d25-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d25-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d25-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d25-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d25-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "gratitude-appreciation-d26-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d26-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d26-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d26-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d26-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "gratitude-appreciation-d27-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d27-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d27-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d27-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d27-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "gratitude-appreciation-d28-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d28-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d28-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d28-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d28-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "gratitude-appreciation-d29-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d29-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d29-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d29-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d29-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "gratitude-appreciation-d30-t1", "text": "Touch something you love—a blanket, a photo, your pet—and whisper \"thank you.\"" },
      { "id": "gratitude-appreciation-d30-t2", "text": "While going to work say aloud or silently: \"I have enough. I am enough. This moment is enough.\"" },
      { "id": "gratitude-appreciation-d30-t3", "text": "Write a sticky note of appreciation and leave it for a coworker, janitor, or stranger to find." },
      { "id": "gratitude-appreciation-d30-t4", "text": "Coming back home say: \"I get to come home. Not everyone does. This is sacred.\"" },
      { "id": "gratitude-appreciation-d30-t5", "text": "Before going to bed say aloud: \"Thank you for this day. Even the hard parts helped me grow.\"" }
    ]
  }
]
  },
  {
    "id": "compassion-kindness",
    "category": "Spiritual Well-Being",
    "title": "Compassion & Kindness",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "compassion-kindness-d1-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d1-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d1-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d1-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d1-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "compassion-kindness-d2-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d2-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d2-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d2-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d2-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "compassion-kindness-d3-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d3-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d3-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d3-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d3-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "compassion-kindness-d4-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d4-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d4-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d4-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d4-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "compassion-kindness-d5-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d5-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d5-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d5-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d5-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "compassion-kindness-d6-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d6-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d6-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d6-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d6-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "compassion-kindness-d7-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d7-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d7-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d7-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d7-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "compassion-kindness-d8-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d8-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d8-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d8-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d8-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "compassion-kindness-d9-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d9-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d9-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d9-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d9-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "compassion-kindness-d10-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d10-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d10-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d10-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d10-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "compassion-kindness-d11-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d11-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d11-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d11-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d11-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "compassion-kindness-d12-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d12-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d12-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d12-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d12-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "compassion-kindness-d13-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d13-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d13-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d13-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d13-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "compassion-kindness-d14-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d14-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d14-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d14-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d14-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "compassion-kindness-d15-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d15-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d15-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d15-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d15-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "compassion-kindness-d16-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d16-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d16-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d16-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d16-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "compassion-kindness-d17-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d17-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d17-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d17-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d17-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "compassion-kindness-d18-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d18-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d18-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d18-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d18-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "compassion-kindness-d19-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d19-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d19-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d19-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d19-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "compassion-kindness-d20-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d20-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d20-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d20-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d20-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "compassion-kindness-d21-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d21-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d21-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d21-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d21-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "compassion-kindness-d22-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d22-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d22-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d22-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d22-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "compassion-kindness-d23-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d23-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d23-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d23-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d23-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "compassion-kindness-d24-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d24-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d24-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d24-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d24-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "compassion-kindness-d25-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d25-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d25-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d25-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d25-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "compassion-kindness-d26-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d26-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d26-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d26-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d26-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "compassion-kindness-d27-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d27-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d27-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d27-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d27-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "compassion-kindness-d28-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d28-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d28-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d28-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d28-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "compassion-kindness-d29-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d29-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d29-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d29-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d29-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "compassion-kindness-d30-t1", "text": "Right after getting out of bed, touch your heart and say: \"Today, I choose to be gentle with myself.\"" },
      { "id": "compassion-kindness-d30-t2", "text": "Before entering your workplace, pause and whisper: \"I bring kindness with me.\"" },
      { "id": "compassion-kindness-d30-t3", "text": "First thing when you arrive at work, greet one person with genuine enthusiasm—let them feel seen and valued." },
      { "id": "compassion-kindness-d30-t4", "text": "As you leave work, celebrate yourself and say: \"I showed up today. I made a difference.\"" },
      { "id": "compassion-kindness-d30-t5", "text": "After getting into bed, imagine sending love to yourself, someone dear to you, and someone who needs it—feel the connection." }
    ]
  }
]
  },
  {
    "id": "mindfulness-presence",
    "category": "Spiritual Well-Being",
    "title": "Mindfulness & Presence",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "mindfulness-presence-d1-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d1-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d1-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d1-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d1-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "mindfulness-presence-d2-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d2-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d2-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d2-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d2-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "mindfulness-presence-d3-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d3-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d3-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d3-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d3-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "mindfulness-presence-d4-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d4-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d4-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d4-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d4-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "mindfulness-presence-d5-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d5-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d5-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d5-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d5-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "mindfulness-presence-d6-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d6-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d6-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d6-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d6-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "mindfulness-presence-d7-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d7-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d7-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d7-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d7-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "mindfulness-presence-d8-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d8-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d8-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d8-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d8-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "mindfulness-presence-d9-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d9-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d9-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d9-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d9-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "mindfulness-presence-d10-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d10-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d10-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d10-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d10-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "mindfulness-presence-d11-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d11-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d11-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d11-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d11-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "mindfulness-presence-d12-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d12-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d12-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d12-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d12-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "mindfulness-presence-d13-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d13-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d13-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d13-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d13-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "mindfulness-presence-d14-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d14-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d14-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d14-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d14-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "mindfulness-presence-d15-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d15-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d15-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d15-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d15-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "mindfulness-presence-d16-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d16-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d16-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d16-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d16-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "mindfulness-presence-d17-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d17-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d17-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d17-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d17-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "mindfulness-presence-d18-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d18-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d18-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d18-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d18-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "mindfulness-presence-d19-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d19-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d19-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d19-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d19-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "mindfulness-presence-d20-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d20-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d20-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d20-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d20-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "mindfulness-presence-d21-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d21-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d21-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d21-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d21-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "mindfulness-presence-d22-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d22-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d22-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d22-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d22-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "mindfulness-presence-d23-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d23-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d23-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d23-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d23-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "mindfulness-presence-d24-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d24-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d24-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d24-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d24-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "mindfulness-presence-d25-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d25-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d25-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d25-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d25-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "mindfulness-presence-d26-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d26-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d26-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d26-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d26-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "mindfulness-presence-d27-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d27-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d27-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d27-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d27-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "mindfulness-presence-d28-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d28-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d28-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d28-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d28-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "mindfulness-presence-d29-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d29-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d29-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d29-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d29-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "mindfulness-presence-d30-t1", "text": "After standing up from bed, take three deep breaths and say: \"I am here. I am alive. I am present.\"" },
      { "id": "mindfulness-presence-d30-t2", "text": "When you step outside, stop and take one full breath of fresh air—really feel it fill your lungs." },
      { "id": "mindfulness-presence-d30-t3", "text": "Before starting a task, pause and ask yourself: \"What does this moment need from me right now?\"" },
      { "id": "mindfulness-presence-d30-t4", "text": "As you leave work, take five deep breaths and consciously shift from \"doing mode\" to \"being mode.\"" },
      { "id": "mindfulness-presence-d30-t5", "text": "Before getting into bed, look around your room and appreciate where you are—notice the comfort, safety, and peace." }
    ]
  }
]
  },
  {
    "id": "forgiveness-release",
    "category": "Spiritual Well-Being",
    "title": "Forgiveness & Release",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "forgiveness-release-d1-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d1-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d1-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d1-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d1-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "forgiveness-release-d2-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d2-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d2-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d2-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d2-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "forgiveness-release-d3-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d3-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d3-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d3-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d3-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "forgiveness-release-d4-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d4-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d4-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d4-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d4-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "forgiveness-release-d5-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d5-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d5-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d5-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d5-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "forgiveness-release-d6-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d6-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d6-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d6-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d6-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "forgiveness-release-d7-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d7-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d7-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d7-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d7-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "forgiveness-release-d8-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d8-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d8-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d8-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d8-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "forgiveness-release-d9-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d9-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d9-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d9-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d9-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "forgiveness-release-d10-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d10-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d10-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d10-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d10-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "forgiveness-release-d11-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d11-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d11-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d11-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d11-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "forgiveness-release-d12-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d12-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d12-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d12-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d12-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "forgiveness-release-d13-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d13-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d13-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d13-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d13-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "forgiveness-release-d14-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d14-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d14-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d14-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d14-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "forgiveness-release-d15-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d15-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d15-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d15-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d15-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "forgiveness-release-d16-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d16-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d16-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d16-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d16-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "forgiveness-release-d17-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d17-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d17-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d17-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d17-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "forgiveness-release-d18-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d18-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d18-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d18-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d18-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "forgiveness-release-d19-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d19-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d19-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d19-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d19-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "forgiveness-release-d20-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d20-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d20-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d20-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d20-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "forgiveness-release-d21-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d21-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d21-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d21-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d21-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "forgiveness-release-d22-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d22-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d22-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d22-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d22-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "forgiveness-release-d23-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d23-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d23-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d23-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d23-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "forgiveness-release-d24-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d24-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d24-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d24-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d24-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "forgiveness-release-d25-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d25-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d25-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d25-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d25-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "forgiveness-release-d26-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d26-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d26-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d26-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d26-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "forgiveness-release-d27-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d27-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d27-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d27-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d27-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "forgiveness-release-d28-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d28-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d28-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d28-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d28-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "forgiveness-release-d29-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d29-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d29-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d29-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d29-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "forgiveness-release-d30-t1", "text": "After standing up from bed, stretch your arms wide and say: \"I release all that weighs me down.\"" },
      { "id": "forgiveness-release-d30-t2", "text": "While walking to your car or bus, declare with confidence: \"I am growing stronger and wiser every day.\"" },
      { "id": "forgiveness-release-d30-t3", "text": "When you begin your work, take a deep breath and say with optimism: \"Today is full of opportunities to learn and grow.\"" },
      { "id": "forgiveness-release-d30-t4", "text": "Before reaching your door, take a deep breath and say with anticipation: \"I'm coming home to love, rest, and peace.\"" },
      { "id": "forgiveness-release-d30-t5", "text": "Before you go to bed, forgive yourself for any imperfection from today." }
    ]
  }
]
  },
  {
    "id": "connection-to-nature",
    "category": "Spiritual Well-Being",
    "title": "Connection to Nature",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "connection-to-nature-d1-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d1-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d1-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d1-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d1-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "connection-to-nature-d2-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d2-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d2-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d2-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d2-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "connection-to-nature-d3-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d3-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d3-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d3-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d3-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "connection-to-nature-d4-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d4-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d4-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d4-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d4-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "connection-to-nature-d5-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d5-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d5-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d5-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d5-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "connection-to-nature-d6-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d6-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d6-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d6-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d6-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "connection-to-nature-d7-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d7-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d7-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d7-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d7-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "connection-to-nature-d8-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d8-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d8-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d8-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d8-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "connection-to-nature-d9-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d9-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d9-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d9-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d9-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "connection-to-nature-d10-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d10-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d10-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d10-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d10-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "connection-to-nature-d11-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d11-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d11-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d11-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d11-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "connection-to-nature-d12-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d12-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d12-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d12-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d12-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "connection-to-nature-d13-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d13-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d13-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d13-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d13-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "connection-to-nature-d14-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d14-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d14-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d14-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d14-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "connection-to-nature-d15-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d15-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d15-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d15-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d15-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "connection-to-nature-d16-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d16-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d16-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d16-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d16-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "connection-to-nature-d17-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d17-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d17-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d17-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d17-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "connection-to-nature-d18-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d18-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d18-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d18-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d18-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "connection-to-nature-d19-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d19-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d19-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d19-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d19-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "connection-to-nature-d20-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d20-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d20-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d20-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d20-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "connection-to-nature-d21-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d21-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d21-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d21-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d21-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "connection-to-nature-d22-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d22-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d22-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d22-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d22-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "connection-to-nature-d23-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d23-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d23-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d23-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d23-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "connection-to-nature-d24-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d24-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d24-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d24-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d24-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "connection-to-nature-d25-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d25-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d25-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d25-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d25-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "connection-to-nature-d26-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d26-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d26-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d26-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d26-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "connection-to-nature-d27-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d27-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d27-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d27-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d27-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "connection-to-nature-d28-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d28-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d28-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d28-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d28-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "connection-to-nature-d29-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d29-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d29-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d29-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d29-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "connection-to-nature-d30-t1", "text": "After standing up from bed, go to a window and greet the day—say: \"Good morning, world! I'm grateful to be alive with you!\"" },
      { "id": "connection-to-nature-d30-t2", "text": "When you step outside, pause and look up at the sky—notice the clouds, the light, the vastness above you." },
      { "id": "connection-to-nature-d30-t3", "text": "Before starting work, look out a window for 30 seconds and simply appreciate the world outside—trees, sky, weather, life." },
      { "id": "connection-to-nature-d30-t4", "text": "As you leave work, take a moment to notice the quality of light outside—is it golden? soft? bright?—and appreciate it." },
      { "id": "connection-to-nature-d30-t5", "text": "After getting into bed, close your eyes and think of one beautiful natural thing you saw today—replay it with gratitude." }
    ]
  }
]
  },
  {
    "id": "self-reflection-journaling",
    "category": "Spiritual Well-Being",
    "title": "Self-Reflection & Journaling",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "self-reflection-journaling-d1-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d1-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d1-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d1-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d1-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "self-reflection-journaling-d2-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d2-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d2-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d2-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d2-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "self-reflection-journaling-d3-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d3-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d3-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d3-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d3-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "self-reflection-journaling-d4-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d4-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d4-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d4-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d4-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "self-reflection-journaling-d5-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d5-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d5-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d5-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d5-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "self-reflection-journaling-d6-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d6-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d6-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d6-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d6-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "self-reflection-journaling-d7-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d7-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d7-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d7-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d7-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "self-reflection-journaling-d8-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d8-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d8-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d8-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d8-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "self-reflection-journaling-d9-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d9-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d9-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d9-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d9-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "self-reflection-journaling-d10-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d10-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d10-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d10-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d10-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "self-reflection-journaling-d11-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d11-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d11-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d11-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d11-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "self-reflection-journaling-d12-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d12-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d12-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d12-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d12-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "self-reflection-journaling-d13-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d13-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d13-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d13-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d13-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "self-reflection-journaling-d14-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d14-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d14-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d14-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d14-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "self-reflection-journaling-d15-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d15-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d15-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d15-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d15-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "self-reflection-journaling-d16-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d16-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d16-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d16-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d16-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "self-reflection-journaling-d17-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d17-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d17-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d17-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d17-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "self-reflection-journaling-d18-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d18-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d18-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d18-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d18-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "self-reflection-journaling-d19-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d19-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d19-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d19-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d19-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "self-reflection-journaling-d20-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d20-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d20-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d20-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d20-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "self-reflection-journaling-d21-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d21-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d21-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d21-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d21-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "self-reflection-journaling-d22-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d22-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d22-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d22-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d22-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "self-reflection-journaling-d23-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d23-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d23-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d23-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d23-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "self-reflection-journaling-d24-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d24-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d24-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d24-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d24-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "self-reflection-journaling-d25-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d25-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d25-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d25-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d25-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "self-reflection-journaling-d26-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d26-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d26-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d26-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d26-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "self-reflection-journaling-d27-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d27-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d27-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d27-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d27-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "self-reflection-journaling-d28-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d28-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d28-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d28-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d28-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "self-reflection-journaling-d29-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d29-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d29-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d29-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d29-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "self-reflection-journaling-d30-t1", "text": "While having your morning drink, ask yourself: \"What part of me needs attention today?\" and listen for the answer." },
      { "id": "self-reflection-journaling-d30-t2", "text": "Before entering your workplace, ask yourself: \"What gift am I bringing to the world today?\" and celebrate your answer." },
      { "id": "self-reflection-journaling-d30-t3", "text": "As you leave work, reflect: \"What's one thing I did well today?\" and genuinely celebrate it." },
      { "id": "self-reflection-journaling-d30-t4", "text": "After dinner, spend ten minutes journaling freely—no rules, just honest thoughts and feelings on paper." },
      { "id": "self-reflection-journaling-d30-t5", "text": "While winding down, reflect: \"What pattern did I notice in myself today?\" and explore it with curiosity." }
    ]
  }
]
  },
  {
    "id": "values-alignment",
    "category": "Spiritual Well-Being",
    "title": "Values Alignment",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "values-alignment-d1-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d1-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d1-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d1-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d1-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "values-alignment-d2-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d2-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d2-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d2-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d2-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "values-alignment-d3-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d3-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d3-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d3-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d3-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "values-alignment-d4-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d4-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d4-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d4-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d4-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "values-alignment-d5-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d5-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d5-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d5-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d5-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "values-alignment-d6-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d6-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d6-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d6-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d6-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "values-alignment-d7-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d7-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d7-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d7-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d7-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "values-alignment-d8-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d8-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d8-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d8-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d8-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "values-alignment-d9-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d9-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d9-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d9-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d9-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "values-alignment-d10-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d10-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d10-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d10-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d10-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "values-alignment-d11-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d11-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d11-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d11-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d11-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "values-alignment-d12-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d12-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d12-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d12-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d12-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "values-alignment-d13-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d13-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d13-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d13-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d13-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "values-alignment-d14-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d14-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d14-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d14-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d14-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "values-alignment-d15-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d15-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d15-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d15-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d15-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "values-alignment-d16-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d16-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d16-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d16-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d16-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "values-alignment-d17-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d17-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d17-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d17-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d17-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "values-alignment-d18-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d18-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d18-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d18-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d18-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "values-alignment-d19-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d19-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d19-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d19-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d19-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "values-alignment-d20-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d20-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d20-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d20-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d20-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "values-alignment-d21-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d21-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d21-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d21-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d21-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "values-alignment-d22-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d22-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d22-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d22-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d22-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "values-alignment-d23-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d23-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d23-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d23-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d23-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "values-alignment-d24-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d24-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d24-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d24-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d24-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "values-alignment-d25-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d25-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d25-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d25-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d25-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "values-alignment-d26-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d26-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d26-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d26-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d26-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "values-alignment-d27-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d27-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d27-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d27-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d27-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "values-alignment-d28-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d28-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d28-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d28-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d28-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "values-alignment-d29-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d29-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d29-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d29-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d29-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "values-alignment-d30-t1", "text": "In the morning ask yourself: “What kind of person do I want to be today?”" },
      { "id": "values-alignment-d30-t2", "text": "Say aloud: “Today, I will live from who I truly am.”" },
      { "id": "values-alignment-d30-t3", "text": "Imagine one situation today where you will act in alignment with your own values." },
      { "id": "values-alignment-d30-t4", "text": "At work say silently: “I choose integrity over comfort.”" },
      { "id": "values-alignment-d30-t5", "text": "Treat one person with extra respect, even if they don’t deserve it, because that’s who you are." }
    ]
  }
]
  },
  {
    "id": "intuition-inner-wisdom",
    "category": "Spiritual Well-Being",
    "title": "Intuition & Inner Wisdom",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d1-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d1-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d1-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d1-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d1-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d2-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d2-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d2-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d2-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d2-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d3-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d3-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d3-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d3-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d3-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d4-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d4-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d4-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d4-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d4-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d5-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d5-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d5-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d5-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d5-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d6-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d6-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d6-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d6-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d6-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d7-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d7-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d7-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d7-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d7-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d8-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d8-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d8-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d8-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d8-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d9-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d9-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d9-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d9-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d9-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d10-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d10-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d10-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d10-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d10-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d11-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d11-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d11-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d11-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d11-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d12-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d12-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d12-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d12-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d12-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d13-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d13-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d13-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d13-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d13-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d14-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d14-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d14-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d14-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d14-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d15-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d15-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d15-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d15-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d15-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d16-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d16-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d16-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d16-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d16-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d17-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d17-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d17-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d17-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d17-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d18-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d18-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d18-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d18-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d18-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d19-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d19-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d19-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d19-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d19-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d20-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d20-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d20-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d20-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d20-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d21-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d21-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d21-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d21-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d21-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d22-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d22-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d22-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d22-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d22-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d23-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d23-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d23-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d23-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d23-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d24-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d24-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d24-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d24-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d24-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d25-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d25-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d25-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d25-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d25-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d26-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d26-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d26-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d26-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d26-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d27-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d27-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d27-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d27-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d27-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d28-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d28-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d28-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d28-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d28-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d29-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d29-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d29-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d29-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d29-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "intuition-inner-wisdom-d30-t1", "text": "After getting out of bed say: “I am willing to listen to myself today.”" },
      { "id": "intuition-inner-wisdom-d30-t2", "text": "While going to work let one positive thought or feeling arise without judging it." },
      { "id": "intuition-inner-wisdom-d30-t3", "text": "At work, before a decision, pause and ask: “What feels right, not just logical?”." },
      { "id": "intuition-inner-wisdom-d30-t4", "text": "On your way to home notice how your body feels when you think about your day." },
      { "id": "intuition-inner-wisdom-d30-t5", "text": "Before you go to bed tell yourself: “I release the need to overthink what happened today.”" }
    ]
  }
]
  },
  {
    "id": "universal-connection",
    "category": "Spiritual Well-Being",
    "title": "Universal Connection",
   "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "universal-connection-d1-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d1-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d1-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d1-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d1-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "universal-connection-d2-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d2-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d2-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d2-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d2-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "universal-connection-d3-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d3-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d3-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d3-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d3-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "universal-connection-d4-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d4-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d4-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d4-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d4-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "universal-connection-d5-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d5-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d5-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d5-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d5-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "universal-connection-d6-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d6-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d6-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d6-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d6-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "universal-connection-d7-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d7-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d7-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d7-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d7-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "universal-connection-d8-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d8-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d8-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d8-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d8-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "universal-connection-d9-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d9-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d9-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d9-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d9-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "universal-connection-d10-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d10-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d10-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d10-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d10-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "universal-connection-d11-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d11-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d11-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d11-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d11-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "universal-connection-d12-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d12-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d12-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d12-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d12-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "universal-connection-d13-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d13-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d13-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d13-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d13-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "universal-connection-d14-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d14-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d14-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d14-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d14-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "universal-connection-d15-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d15-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d15-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d15-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d15-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "universal-connection-d16-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d16-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d16-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d16-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d16-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "universal-connection-d17-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d17-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d17-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d17-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d17-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "universal-connection-d18-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d18-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d18-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d18-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d18-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "universal-connection-d19-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d19-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d19-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d19-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d19-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "universal-connection-d20-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d20-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d20-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d20-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d20-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "universal-connection-d21-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d21-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d21-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d21-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d21-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "universal-connection-d22-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d22-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d22-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d22-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d22-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "universal-connection-d23-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d23-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d23-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d23-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d23-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "universal-connection-d24-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d24-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d24-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d24-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d24-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "universal-connection-d25-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d25-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d25-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d25-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d25-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "universal-connection-d26-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d26-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d26-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d26-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d26-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "universal-connection-d27-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d27-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d27-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d27-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d27-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "universal-connection-d28-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d28-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d28-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d28-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d28-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "universal-connection-d29-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d29-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d29-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d29-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d29-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "universal-connection-d30-t1", "text": "Before getting out of bed, remind yourself: “I am part of something bigger than me.”" },
      { "id": "universal-connection-d30-t2", "text": "Place your feet on the floor and feel that you are standing on the Earth." },
      { "id": "universal-connection-d30-t3", "text": "On the way to work, look at the people around you and remember they have inner lives like you." },
      { "id": "universal-connection-d30-t4", "text": "At work, pause and feel connected to the space and people around you." },
      { "id": "universal-connection-d30-t5", "text": "Before you go to bed, feel your breathing and remember you share air with the Universe." }
    ]
  }
]
  },
  {
    "id": "stillness-silence",
    "category": "Spiritual Well-Being",
    "title": "Stillness & Silence",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "stillness-silence-d1-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d1-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d1-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d1-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d1-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "stillness-silence-d2-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d2-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d2-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d2-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d2-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "stillness-silence-d3-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d3-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d3-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d3-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d3-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "stillness-silence-d4-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d4-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d4-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d4-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d4-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "stillness-silence-d5-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d5-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d5-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d5-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d5-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "stillness-silence-d6-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d6-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d6-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d6-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d6-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "stillness-silence-d7-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d7-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d7-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d7-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d7-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "stillness-silence-d8-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d8-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d8-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d8-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d8-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "stillness-silence-d9-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d9-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d9-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d9-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d9-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "stillness-silence-d10-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d10-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d10-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d10-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d10-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "stillness-silence-d11-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d11-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d11-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d11-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d11-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "stillness-silence-d12-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d12-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d12-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d12-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d12-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "stillness-silence-d13-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d13-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d13-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d13-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d13-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "stillness-silence-d14-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d14-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d14-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d14-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d14-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "stillness-silence-d15-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d15-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d15-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d15-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d15-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "stillness-silence-d16-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d16-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d16-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d16-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d16-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "stillness-silence-d17-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d17-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d17-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d17-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d17-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "stillness-silence-d18-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d18-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d18-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d18-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d18-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "stillness-silence-d19-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d19-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d19-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d19-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d19-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "stillness-silence-d20-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d20-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d20-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d20-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d20-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "stillness-silence-d21-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d21-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d21-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d21-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d21-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "stillness-silence-d22-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d22-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d22-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d22-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d22-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "stillness-silence-d23-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d23-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d23-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d23-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d23-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "stillness-silence-d24-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d24-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d24-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d24-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d24-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "stillness-silence-d25-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d25-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d25-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d25-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d25-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "stillness-silence-d26-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d26-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d26-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d26-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d26-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "stillness-silence-d27-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d27-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d27-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d27-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d27-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "stillness-silence-d28-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d28-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d28-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d28-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d28-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "stillness-silence-d29-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d29-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d29-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d29-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d29-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "stillness-silence-d30-t1", "text": "Before getting out of bed, lie still for 30 seconds and do nothing." },
      { "id": "stillness-silence-d30-t2", "text": "Do one part of your morning routine without any sound or screen." },
      { "id": "stillness-silence-d30-t3", "text": "While going to work, let your thoughts come and go without following them." },
      { "id": "stillness-silence-d30-t4", "text": "At work, sit quietly for 30 seconds before starting a new task." },
      { "id": "stillness-silence-d30-t5", "text": "Before sleeping at night, lie in bed and feel the quiet of the room." }
    ]
  }
]
  },
  {
    "id": "ritual-intention-setting",
    "category": "Spiritual Well-Being",
    "title": "Ritual & Intention Setting",
    "days": [
  {
    "day": 1,
    "affirmation": "I am capable of growth.",
    "tasks": [
      { "id": "ritual-intention-setting-d1-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d1-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d1-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d1-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d1-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 2,
    "affirmation": "I choose progress today.",
    "tasks": [
      { "id": "ritual-intention-setting-d2-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d2-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d2-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d2-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d2-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 3,
    "affirmation": "I trust myself to learn and improve.",
    "tasks": [
      { "id": "ritual-intention-setting-d3-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d3-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d3-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d3-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d3-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 4,
    "affirmation": "I am resilient and steady.",
    "tasks": [
      { "id": "ritual-intention-setting-d4-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d4-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d4-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d4-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d4-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 5,
    "affirmation": "I honor my commitments to myself.",
    "tasks": [
      { "id": "ritual-intention-setting-d5-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d5-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d5-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d5-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d5-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 6,
    "affirmation": "I show up with intention.",
    "tasks": [
      { "id": "ritual-intention-setting-d6-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d6-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d6-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d6-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d6-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 7,
    "affirmation": "I am consistent, even in small steps.",
    "tasks": [
      { "id": "ritual-intention-setting-d7-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d7-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d7-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d7-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d7-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 8,
    "affirmation": "I can do hard things.",
    "tasks": [
      { "id": "ritual-intention-setting-d8-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d8-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d8-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d8-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d8-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 9,
    "affirmation": "I am focused and present.",
    "tasks": [
      { "id": "ritual-intention-setting-d9-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d9-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d9-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d9-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d9-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },
  {
    "day": 10,
    "affirmation": "I am proud of my effort.",
    "tasks": [
      { "id": "ritual-intention-setting-d10-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d10-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d10-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d10-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d10-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 11,
    "affirmation": "I create positive change daily.",
    "tasks": [
      { "id": "ritual-intention-setting-d11-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d11-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d11-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d11-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d11-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 12,
    "affirmation": "I am patient with my process.",
    "tasks": [
      { "id": "ritual-intention-setting-d12-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d12-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d12-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d12-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d12-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 13,
    "affirmation": "I grow stronger with every repetition.",
    "tasks": [
      { "id": "ritual-intention-setting-d13-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d13-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d13-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d13-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d13-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 14,
    "affirmation": "I deserve a life I love.",
    "tasks": [
      { "id": "ritual-intention-setting-d14-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d14-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d14-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d14-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d14-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 15,
    "affirmation": "I build habits that support me.",
    "tasks": [
      { "id": "ritual-intention-setting-d15-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d15-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d15-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d15-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d15-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 16,
    "affirmation": "I take responsibility with compassion.",
    "tasks": [
      { "id": "ritual-intention-setting-d16-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d16-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d16-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d16-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d16-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 17,
    "affirmation": "I act with clarity and purpose.",
    "tasks": [
      { "id": "ritual-intention-setting-d17-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d17-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d17-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d17-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d17-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 18,
    "affirmation": "I am calm, capable, and grounded.",
    "tasks": [
      { "id": "ritual-intention-setting-d18-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d18-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d18-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d18-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d18-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 19,
    "affirmation": "I improve one day at a time.",
    "tasks": [
      { "id": "ritual-intention-setting-d19-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d19-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d19-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d19-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d19-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 20,
    "affirmation": "I celebrate my progress.",
    "tasks": [
      { "id": "ritual-intention-setting-d20-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d20-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d20-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d20-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d20-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 21,
    "affirmation": "I make time for what matters.",
    "tasks": [
      { "id": "ritual-intention-setting-d21-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d21-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d21-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d21-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d21-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 22,
    "affirmation": "I listen to what I need.",
    "tasks": [
      { "id": "ritual-intention-setting-d22-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d22-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d22-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d22-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d22-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 23,
    "affirmation": "I am disciplined and kind to myself.",
    "tasks": [
      { "id": "ritual-intention-setting-d23-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d23-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d23-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d23-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d23-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 24,
    "affirmation": "I choose healthy choices today.",
    "tasks": [
      { "id": "ritual-intention-setting-d24-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d24-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d24-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d24-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d24-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 25,
    "affirmation": "I keep going, even when it’s not perfect.",
    "tasks": [
      { "id": "ritual-intention-setting-d25-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d25-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d25-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d25-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d25-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 26,
    "affirmation": "I trust the process of becoming.",
    "tasks": [
      { "id": "ritual-intention-setting-d26-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d26-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d26-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d26-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d26-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 27,
    "affirmation": "I am motivated by my values.",
    "tasks": [
      { "id": "ritual-intention-setting-d27-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d27-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d27-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d27-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d27-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 28,
    "affirmation": "I am grateful for this opportunity to grow.",
    "tasks": [
      { "id": "ritual-intention-setting-d28-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d28-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d28-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d28-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d28-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 29,
    "affirmation": "I finish what I start.",
    "tasks": [
      { "id": "ritual-intention-setting-d29-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d29-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d29-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d29-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d29-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  },

  {
    "day": 30,
    "affirmation": "I am becoming my best self.",
    "tasks": [
      { "id": "ritual-intention-setting-d30-t1", "text": "Before getting out of bed, say one simple intention for the day." },
      { "id": "ritual-intention-setting-d30-t2", "text": "Before leaving to work, pause and mentally mark the start of your day." },
      { "id": "ritual-intention-setting-d30-t3", "text": "During commute, choose one quality you want to carry today (calm, focus, kindness)." },
      { "id": "ritual-intention-setting-d30-t4", "text": "At work, do one action as a personal ritual (slow, precise, present)." },
      { "id": "ritual-intention-setting-d30-t5", "text": "Before bed, review your day and notice where you honoured your intention." }
    ]
  }
]
  }
] as const;

export const CATEGORIES = Array.from(new Set(PLANS_V1.map(p => p.category))).sort();
export const plansByCategory = (category: string) => PLANS_V1.filter(p => p.category === category);
export const planById = (id: string) => PLANS_V1.find(p => p.id === id);