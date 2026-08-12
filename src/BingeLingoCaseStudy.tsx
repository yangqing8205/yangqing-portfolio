const liveProductUrl = "https://binge-lingo.onrender.com";
const githubUrl = "https://github.com/yangqing8205/binge-lingo";

const captureSteps = [
  ["STEP 01", "截图识别字幕"],
  ["STEP 02", "AI 提取地道表达"],
  ["STEP 03", "自动保存进知识库"],
];

const trySteps = [
  ["01", "上传一张带英文字幕的截图"],
  ["02", "查看 AI 提取结果"],
  ["03", "保存并复习"],
  ["04", "进入 Scene Talk"],
];

export default function BingeLingoCaseStudy() {
  return (
    <main className="case-stage">
      <article className="case-paper">
        <header className="case-nav">
          <a className="case-brand" href="/?panel=work" aria-label="返回作品页">
            YQ
          </a>
          <div className="case-nav-meta">
            <span>CASE STUDY / 01</span>
            <span>AI PRODUCT OPERATIONS</span>
          </div>
          <a className="case-back" href="/?panel=work">
            BACK TO WORK
          </a>
        </header>

        <section className="case-hero">
          <div className="case-hero-meta case-subtitle-line case-subtitle-1">
            <span>BINGELINGO / LIVE</span>
            <span>INDEPENDENT PROJECT · 2026</span>
          </div>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <h1 className="case-subtitle-line case-subtitle-2">
                <strong>周末</strong>
                <span>你对自己说：</span>
                <span>"今天看剧，顺便学点英语。"</span>
              </h1>
              <p className="case-hero-story case-subtitle-line case-subtitle-3">
                结果剧情看上头，最后只剩一相册截图。
              </p>
              <div className="case-hero-setup case-subtitle-line case-subtitle-4">
                <p className="case-hero-problem">稍微勤奋一点的话，你会打开 AI，问问这句台词是什么意思。但没过多久，这些解释又被新的对话顶了上去。</p>
                <p className="case-hero-problem">更勤奋的人会把表达整理进自己的知识库。只是不断截图、询问、复制、补充例句，这套流程实在不够顺手。</p>
              </div>
              <div className="case-hero-product case-subtitle-line case-subtitle-5">
                <strong>于是，我做了 BingeLingo。</strong>
                <span>它把散落的截图，变成可以复习、也可以真正开口使用的英语素材。</span>
              </div>
            </div>

            <div className="case-story-column case-subtitle-line case-subtitle-3">
              <div className="case-story-head">
                <span>A VERY FAMILIAR STORY</span>
                <span>01—04</span>
              </div>
              <div className="case-storyboard" aria-label="截图、询问、手动整理到自动保存的流程示意">
                <div className="case-story-photo case-story-photo-a"><div><span>What does that mean?</span></div></div>
                <div className="case-story-photo case-story-photo-b"><div><span>I should save this.</span></div></div>
                <div className="case-story-photo case-story-photo-c"><div><span>Sit and spin.</span></div></div>
                <div className="case-story-chat">
                  <p><strong>你：</strong>这句话是什么意思？</p>
                  <p>新的对话不断出现……</p>
                </div>
                <div className="case-story-manual" aria-label="手动整理步骤">
                  <span>SCREENSHOT</span><span>COPY</span><span>MEANING</span><span>EXAMPLE</span>
                </div>
                <div className="case-learning-card">
                  <span>03</span>
                  <div><small>SAVED TO BINGELINGO</small><strong>sit and spin</strong><p>去你的；少指挥我。</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-story-flow case-subtitle-line case-subtitle-5" aria-label="用户原本的学习流程">
            <div><span>01</span><strong>一相册截图</strong></div>
            <div><span>02</span><strong>问 AI，但是被之后的对话淹没了</strong></div>
            <div><span>03</span><strong>手动整理太麻烦</strong></div>
            <div><span>04</span><strong>自动变成学习素材</strong></div>
          </div>
          <div className="case-manifesto case-subtitle-line case-subtitle-6">
            <span className="case-manifesto-primary">别让"学英语"成为</span>
            <span className="case-manifesto-secondary">追完一整季后的错觉。</span>
          </div>
          <div className="case-learning-loop" role="group" aria-label="从看剧截图到开口练习的学习闭环">
            <div className="case-loop-scene">
              <img
                src="/projects/bingelingo-capture.png"
                alt="Modern Family 剧集截图中标出 pull through 的学习场景"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="case-loop-highlight">pull through</div>
            <div className="case-loop-card">
              <small>EXPRESSION SAVED</small>
              <strong>pull through</strong>
              <p>挺过来；转危为安</p>
            </div>
            <div className="case-loop-review">
              <small>REVIEW</small>
              <p>He finally managed to ______.</p>
            </div>
            <div className="case-loop-bubble">Can you use "pull through" here?</div>
            <div className="case-loop-route" aria-label="WATCH / CAPTURE / REVIEW / SPEAK">
              <span>WATCH</span><span>CAPTURE</span><span>REVIEW</span><span>SPEAK</span>
            </div>
          </div>
          <div className="case-hero-actions case-subtitle-line case-subtitle-6">
            <a className="case-button case-button-dark" href="#learning-loop">
              SEE HOW IT WORKS <span aria-hidden="true">↓</span>
            </a>
            <a className="case-text-link" href="#learning-loop">
              FOLLOW THE PRODUCT LOOP ↓
            </a>
          </div>
        </section>

        <section className="case-section case-problem case-reveal" aria-labelledby="problem-title">
          <div className="case-section-head">
            <span>01 / 问题  PROBLEM</span>
            <h2 id="problem-title">
              <span className="case-problem-primary">截图不是知识库。</span>
              <span className="case-problem-secondary">收藏，也不等于学会。</span>
            </h2>
          </div>
          <div className="case-problem-grid">
            <div className="case-problem-intro">
              <p>
                截图是最自然的动作，但它通常只完成了"保存"，没有完成"学习"。
              </p>
            </div>
            <ol className="case-issue-list">
              <li><b>01</b><span>截图散落在相册里，很快失去再次打开的理由。</span></li>
              <li><b>02</b><span>AI 的解释被新对话顶走，没有稳定地留在学习流程里。</span></li>
              <li><b>03</b><span>手动复制、整理和补充例句足够认真，却不够 convenient。</span></li>
            </ol>
          </div>
          <div className="case-problem-insight">
            <p>真正缺少的不是解释，</p>
            <strong>而是一条不打断看剧，还能把表达带回来的路。</strong>
          </div>
        </section>

        <section className="case-section case-loop case-capture case-reveal" id="learning-loop" aria-labelledby="loop-title">
          <div className="case-feature-layout">
            <div className="case-loop-copy case-feature-copy">
              <span>02 / 捕捉  CAPTURE</span>
              <h2 id="loop-title">截图之后，<br />剩下的交给 BingeLingo。</h2>
              <p>
                它会自动识别字幕，找出值得学习的表达，补充释义和例句，再把内容保存进知识库。你不用暂停剧情，也不用在几个软件之间来回切换。
              </p>
            </div>
            <div className="case-feature-image case-feature-image-capture">
              <img
                src="/projects/bingelingo-capture.png"
                alt="BingeLingo 从剧集截图捕捉字幕表达的产品界面"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
          <div className="case-capture-steps" aria-label="自动处理步骤">
            {captureSteps.map(([no, title]) => (
              <article key={no}><span>{no}</span><strong>{title}</strong></article>
            ))}
          </div>
        </section>

        <section className="case-section case-review case-reveal" aria-labelledby="review-title">
          <div className="case-feature-layout case-feature-layout-reverse">
            <div className="case-feature-copy">
              <span>03 / 复习  REVIEW</span>
              <h2 id="review-title">带着原场景，<br />再主动想起来。</h2>
              <p>复习不会把表达从剧情里剥离。原始截图和新语境填空会一起出现，让"看懂了"变成一次真正的主动回忆。</p>
            </div>
            <div className="case-feature-image case-feature-image-review">
              <img
                src="/projects/bingelingo-review.png"
                alt="BingeLingo 带着原剧场景进行表达填空复习的界面"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
        </section>

        <section className="case-section case-awaken case-speak case-reveal" aria-labelledby="awaken-title">
          <div className="case-feature-layout">
            <div className="case-awaken-copy case-feature-copy">
              <span>04 / 对话  SPEAK</span>
              <h2 id="awaken-title">收藏被保存了，但它还没有真正属于你。</h2>
              <p>如果学习最终是为了表达，这些"死去的收藏"就需要被重新唤醒。</p>
              <p>
                <strong>Scene Talk</strong> 会分析剧中人物的说话方式，让你直接与角色进行情境对话。
              </p>
              <blockquote className="case-scene-quote">
                <strong>"How you doin'?"</strong>
                <span>——歪头，挑起一边眉毛，露出一个过分自信的笑。</span>
              </blockquote>
            </div>
            <div className="case-feature-image case-feature-image-speak">
              <img
                src="/projects/bingelingo-scene-talk.png"
                alt="BingeLingo Scene Talk 与剧中角色进行情境对话的界面"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
          <div className="case-language-goal">
            <p>而终极的目的不是没有蛀牙，而是一口短语、俚语和地道表达，成为一个玩弄文字者</p>
          </div>
        </section>

        <section className="case-section case-continue case-reveal" aria-labelledby="continue-title">
          <div className="case-feature-layout case-feature-layout-reverse">
            <div className="case-feature-copy">
              <span>05 / 延续  CONTINUE</span>
              <h2 id="continue-title">把练习带走，<br />继续聊完一个晚自习。</h2>
              <p>
                如果想把练习带到其他 AI 工具中，<strong>Practice to Go</strong> 还会生成完整的角色提示词。复制过去，和他畅聊一个晚自习。
              </p>
            </div>
            <div className="case-feature-image case-feature-image-continue">
              <img
                src="/projects/bingelingo-practice-to-go.png"
                alt="BingeLingo Practice to Go 生成角色提示词并延续练习的界面"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
        </section>

        <section className="case-section case-operations case-reveal" aria-labelledby="operations-title">
          <div className="case-section-head">
            <span>06 / OPERATIONS THINKING</span>
            <h2 id="operations-title">产品做好以后，我会先观察这些动作。</h2>
          </div>
          <div className="case-signal-list">
            <article><b>ACTIVATION</b><h3>用户有没有完成第一张表达卡？</h3><p>第一步是否足够清晰，用户能否马上感受到截图被用起来了。</p></article>
            <article><b>REVIEW</b><h3>保存的表达，有没有被再次打开？</h3><p>复习回访比收藏数量更接近真正的学习行为。</p></article>
            <article><b>TRANSFER</b><h3>复习之后，用户会不会进入 Scene Talk？</h3><p>观察用户是否愿意继续走向主动表达。</p></article>
            <article><b>DROP-OFF</b><h3>学习闭环最容易在哪一步中断？</h3><p>判断该优化内容、提示、等待时间，还是功能衔接。</p></article>
          </div>
        </section>

        <section className="case-section case-execution case-reveal" aria-labelledby="execution-title">
          <div className="case-section-head case-section-head-light">
            <span>07 / EXECUTION & ITERATION</span>
            <h2 id="execution-title">做出来，也要让它在线上真正可用。</h2>
          </div>
          <div className="case-execution-grid">
            <p>
              BingeLingo 使用 Flask 和原生 JavaScript 构建，并部署到 Render。模型服务、鉴权方式和响应时间，也都成为产品体验的一部分。
            </p>
            <ul>
              <li><span>01</span>发现原模型网关无法被 Render 公网访问后，迁移模型服务</li>
              <li><span>02</span>定位 SDK 鉴权头不兼容导致的 401，并更换 API 客户端</li>
              <li><span>03</span>优化角色生成与连续对话的等待时间</li>
              <li><span>04</span>完成截图提取、复习和 Scene Talk 的线上流程验证</li>
            </ul>
          </div>
        </section>

        <section className="case-section case-try case-reveal" id="try-bingelingo" aria-labelledby="try-title">
          <div className="case-try-heading">
            <span>08 / TRY THE PRODUCT</span>
            <h2 id="try-title">拿一张截图，走一遍完整流程。</h2>
            <p>准备一张带英文字幕的剧集截图，然后跟着四步体验。</p>
          </div>
          <ol className="case-try-steps">
            {trySteps.map(([no, label]) => (
              <li key={no}><span>{no}</span><strong>{label}</strong></li>
            ))}
          </ol>
          <div className="case-try-actions">
            <a className="case-button case-button-dark" href={liveProductUrl} target="_blank" rel="noreferrer">
              OPEN LIVE PRODUCT <span aria-hidden="true">↗</span>
            </a>
            <a className="case-button" href={githubUrl} target="_blank" rel="noreferrer">
              VIEW GITHUB <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="case-access-note">
            <b>ACCESS NOTE</b>
            <p>线上版本是私人体验版，需要访问权限；作品页已经展示完整流程。</p>
            <p>Render 免费服务首次启动可能需要稍等片刻。</p>
          </div>
        </section>

        <footer className="case-footer case-reveal">
          <p>
            <span className="case-footer-line">从喜欢一句台词，</span>
            <span className="case-footer-line">到真正说出口。</span>
            <span className="case-footer-summary">BingeLingo 想补上中间那段路。</span>
          </p>
          <div className="case-footer-actions">
            <a className="case-footer-primary" href={liveProductUrl} target="_blank" rel="noreferrer">OPEN PRODUCT <span aria-hidden="true">↗</span></a>
            <a className="case-footer-secondary" href={githubUrl} target="_blank" rel="noreferrer">VIEW GITHUB <span aria-hidden="true">↗</span></a>
            <a className="case-footer-quiet" href="/?panel=work">BACK TO WORK ↑</a>
          </div>
          <div className="case-footer-meta"><span>YQ©26</span><span>BINGELINGO / CASE STUDY</span></div>
        </footer>
      </article>
    </main>
  );
}