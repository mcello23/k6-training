import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check, sleep } from 'k6';
import http from 'k6/http';
import uuid from './libs/uuid.js';

export function handleSummary(data) {
  return {
    "./reports/result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '2m', target: 100 },
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2500'], // 95% devem responder em até 2000ms
    http_req_failed: ['rate<0.01'], // Menos de 1% de erro
  },
};

export function setup() {
  const url = 'http://localhost:3333/users';
  const res = http.del(url);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}

export default function () {
  const url = 'http://localhost:3333/signup';

  const payload = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qa.com`,
    password: `pwd123`,
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  const res = http.post(url, payload, { headers });

  console.log(res.body);

  check(res, {
    'status is 201': (r) => r.status === 201,
  });

  sleep(1);
}