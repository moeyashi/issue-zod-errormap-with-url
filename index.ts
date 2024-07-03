import './style.css';

import z from 'zod';

const o = z
  .union([z.literal('ok'), z.string().url('foo').optional()])
  .safeParse('', {
    errorMap: (error, ctx) => {
      console.log('ctx: ', ctx);
      return { message: 'bar' };
    },
  });

// expected issue.message is 'bar', but actual 'foo'
console.log('issues: ', o.error?.issues);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>See console</h1>`;
