// Shared site script. Each feature only runs when its markup is on the page.
const $ = id => document.getElementById(id);
const money = v => '$' + Math.round(v).toLocaleString('en-AU');

// Mobile menu
const nav = $('nav'), mb = $('menuBtn');
if (nav && mb) {
  const menu = o => {
    nav.classList.toggle('open', o); document.body.classList.toggle('locked', o);
    mb.setAttribute('aria-expanded', o); mb.setAttribute('aria-label', o ? 'Close menu' : 'Open menu');
  };
  mb.onclick = () => menu(!nav.classList.contains('open'));
  nav.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => menu(false)));
}

// Homepage estimator
if ($('spend')) {
  const s = $('spend'), sm = $('small'), lg = $('large');
  let small = true;
  const u = () => {
    const v = +s.value; $('spendOut').textContent = money(v);
    $('out').textContent = money(v * (small ? .435 : .385));
    $('note').textContent = small ? '43.5% refundable offset' : '38.5% non-refundable offset (from)';
  };
  const set = b => { small = b; sm.setAttribute('aria-pressed', b); lg.setAttribute('aria-pressed', !b); u(); };
  sm.onclick = () => set(true); lg.onclick = () => set(false); s.oninput = u; u();
}

// Forms without a backend yet: show the confirmation message
[['bookform', 'ok'], ['contactForm', 'contactOk']].forEach(([f, ok]) => {
  if ($(f)) $(f).addEventListener('submit', e => { e.preventDefault(); $(ok).hidden = false; e.target.reset(); });
});

// Tabs (R&D Tax Incentive page)
document.querySelectorAll('[role=tablist]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role=tab]')];
  const show = t => tabs.forEach(x => {
    const on = x === t; x.setAttribute('aria-selected', on);
    $(x.getAttribute('aria-controls')).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.onclick = () => show(t);
    t.onkeydown = e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { const n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); show(n); }
    };
  });
});

// Blog category filter
document.querySelectorAll('.filters').forEach(bar => {
  bar.querySelectorAll('button').forEach(b => b.onclick = () => {
    bar.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    document.querySelectorAll('.post').forEach(p => {
      p.hidden = b.dataset.cat !== 'All' && p.dataset.cat !== b.dataset.cat;
    });
  });
});

// Benefit calculator page
if ($('benefitCalc')) {
  const state = { turnover: 'small', position: 'loss' };
  const rates = { small: { loss: .435, profit: .185 }, mid: { loss: .165, profit: .165 }, large: { loss: 0, profit: 0 } };
  const notes = {
    'small-loss': 'Refundable cash payment, even if no tax payable (indicative).',
    'small-profit': 'Net benefit after tax on the R&D deduction; offset reduces tax liability (indicative).',
    'mid': 'Non-refundable offset above company tax rate; excess carries forward (indicative).',
    'large': 'Large entities require a tailored assessment. Talk to a specialist.'
  };
  const u = () => {
    const v = +$('bcSpend').value; $('bcSpendOut').textContent = money(v);
    $('bcOut').textContent = money(v * rates[state.turnover][state.position]);
    $('bcNote').textContent = notes[state.turnover === 'small' ? 'small-' + state.position : state.turnover];
  };
  document.querySelectorAll('#benefitCalc .seg').forEach(g => g.querySelectorAll('button').forEach(b => b.onclick = () => {
    g.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    state[g.dataset.name] = b.dataset.v; u();
  }));
  $('bcSpend').oninput = u; u();
}

// Eligibility quiz
if ($('quiz')) {
  const Q = [
    { q: 'Are you a:', hint: 'The R&D Tax Incentive is available to incorporated companies. Other structures may have alternative options.', opts: ['Company (Pty Ltd or Ltd)', 'Trust', 'Sole trader', 'Individual', 'Other'],
      bad: { 'Trust': 'Trusts are not eligible to apply for the R&D Tax Incentive. Generally, only companies are eligible, there are exceptions though!',
             'Sole trader': 'Sole Traders are not eligible to apply for the R&D Tax Incentive. Generally, only companies are eligible, there are exceptions though!',
             'Individual': 'Individuals are not eligible to apply for the R&D Tax Incentive. Generally, only companies are eligible, there are exceptions though!' } },
    { q: 'Will you spend more than $20,000 on your R&D activities in one financial year?', hint: 'Minimum spend of $20,000 per income year applies, unless you are working with a registered Research Service Provider.', opts: ['Yes', 'No'],
      bad: { No: 'To be eligible, you need to spend more than $20,000 in one financial year unless you are working with a registered Research Service Provider. You might like to come back to this questionnaire once you have spent over $20,000 in one year.' } },
    { q: 'Are your R&D activities being undertaken in Australia?', hint: 'Core R&D activities and the majority of R&D expenditure must be incurred in Australia. Some exceptions apply.', opts: ['Yes', 'No'],
      bad: { No: 'To be eligible, core R&D activities and the majority of your expenditure generally need to be undertaken within Australia. Some exceptions apply, for example with prior approval, part of a project can be conducted overseas.' } },
    { q: 'Is your innovation project based on scientific or engineering principles?', hint: 'R&D activities must involve systematic investigation based on the scientific method: hypothesis, experiment, evaluation.', opts: ['Yes', 'No'],
      bad: { No: 'Unfortunately, other types of research and development such as marketing, sales, sociology etc. are not eligible. You might like to come back to this questionnaire once you have eligible activities.' } },
    { q: 'Are you creating a new or improved:', hint: 'Select all that apply to your R&D project.', multi: true, opts: ['Product', 'Process', 'Service', 'Device', 'None of the above'],
      bad: { 'None of the above': 'Sorry, your research and development must be a product, process, service or device to be eligible. You might like to come back to this questionnaire once you have eligible activities.' } },
    { q: 'Is there a risk your R&D project might not work, or have to be done differently than you are planning?', hint: 'The R&D Tax Incentive requires technical uncertainty, the outcome must not be known in advance from existing knowledge.', opts: ['Yes', 'No'],
      bad: { No: 'Sorry, to be eligible, the outcome of your project cannot be certain or guaranteed. You might like to come back to this questionnaire once you have eligible risk.' } },
    { q: 'Are you keeping any records or documentation of your work and time?', hint: 'The ATO requires contemporaneous documentation of R&D activities: lab notebooks, experiment logs, time records, emails, reports.', opts: ['Yes', 'No'],
      bad: { No: 'The program requires documentation to be kept to be eligible. You might like to come back to this questionnaire once you have eligible documentation.' } }
  ];
  const box = $('quiz');
  const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const restart = '<button class="btn ghost" id="qRestart">↺ Start again</button>';
  const bindRestart = () => { $('qRestart').onclick = () => render(0); };
  function render(i) {
    if (i >= Q.length) {
      box.innerHTML = `<div class="quiz-result ok"><div class="eyebrow">Your result</div><h3>Good news: you may be eligible.</h3>
        <p>Based on your answers, your business looks like a strong candidate for the R&D Tax Incentive. Book a free 30-minute assessment and a specialist will confirm your eligibility and estimate your benefit.</p>
        <div class="ctas"><a class="btn" href="contact.html">Book free assessment →</a><a class="btn ghost" href="benefit-calculator.html">Estimate your benefit</a></div></div>`;
      return;
    }
    const q = Q[i], type = q.multi ? 'checkbox' : 'radio';
    box.innerHTML = `<div class="quiz-progress"><span>Question ${i + 1} of ${Q.length}</span><span>${Math.round(i / Q.length * 100)}%</span></div>
      <div class="pbar"><i style="width:${i / Q.length * 100}%"></i></div>
      <fieldset><legend><h3>${esc(q.q)}</h3></legend><p class="small">${esc(q.hint)}</p>
      <div class="quiz-opts">${q.opts.map(o => `<label class="opt"><input type="${type}" name="q" value="${esc(o)}"> ${esc(o)}</label>`).join('')}</div></fieldset>
      <p class="quiz-msg" id="qMsg" hidden></p>
      <div class="ctas"><button class="btn" id="qNext" disabled>Continue →</button>${i ? restart : ''}</div>`;
    const inputs = [...box.querySelectorAll('input')];
    inputs.forEach(inp => inp.onchange = () => {
      if (q.multi) {
        const none = 'None of the above';
        if (inp.value === none && inp.checked) inputs.forEach(x => { if (x !== inp) x.checked = false; });
        else if (inp.checked) inputs.find(x => x.value === none).checked = false;
      }
      $('qNext').disabled = !inputs.some(x => x.checked);
      $('qMsg').hidden = true;
    });
    $('qNext').onclick = () => {
      const picked = inputs.filter(x => x.checked).map(x => x.value);
      const badPick = picked.find(p => q.bad && q.bad[p]);
      if (badPick) {
        box.innerHTML = `<div class="quiz-result"><div class="eyebrow">Your result</div><h3>You may not be eligible right now.</h3><p>${esc(q.bad[badPick])}</p>
          <p>Every situation is different. A specialist can tell you whether an exception applies.</p>
          <div class="ctas"><a class="btn" href="contact.html">Talk to a specialist</a>${restart}</div></div>`;
        bindRestart();
        return;
      }
      render(i + 1);
    };
    if (i) bindRestart();
  }
  $('quizStart').onclick = () => render(0);
}
