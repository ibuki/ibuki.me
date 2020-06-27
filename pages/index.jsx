import { Card, Col, Container, Jumbotron, ListGroup, Row } from 'react-bootstrap'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Jumbotron fluid='true'>
        <Container id='home'>
          <p className="display-4">コードの品質が<br class="d-md-inline d-none" />気になっていませんか？</p>
          <p className="pt-3">
            変化の激しい要望に耐えるには、コードの品質が何より大切です。エンジニアには継続して高いパフォーマンスを出して貰いたいです。ドーピング的な短期間の速度向上ではなく、チームの地力を上げるためにはコーディング技術が重要だと考えています。<br/>
            合同会社イブキは、全てのコードの品質向上に努めます。
          </p>
        </Container>
      </Jumbotron>

      <hr className="featurette-divider"/>

      <Container id='service'>
        <Row>
          <Col md="4">
            <h2>Vim導入支援</h2>
            <p>コーディングは文章の記述とは違い、編集する箇所が頻繁に動きます。カーソルキーやマウスではあなたの思考スピードに追いつけません。</p>
          </Col>
          <Col md="4">
            <h2 className='text-nowrap'>E2Eテスト導入</h2>
            <p>テストがないと、新しいコードは書けても古いコードの修正は不安です。現実的なテスト拡張と、理想的なテスト構想の両方の導入を行います。</p>
          </Col>
          <Col md="4">
            <h2 className='text-nowrap'>コードレビュー</h2>
            <p>あなたの職場に、コードを批判する文化はありますか？もしなければ、メンバーはコードの質に不安を持っているはずです。健全に批判する文化を根付かせます。</p>
          </Col>
        </Row>

        <hr className="featurette-divider"/>

        <Card className='mt-3'>
          <Card.Header>その他・通常のシステム開発</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>RailsによるWebアプリケーション開発・運用 (経験3年)</ListGroup.Item>
            <ListGroup.Item>Vue.jsによるWebページ開発 (経験2年)</ListGroup.Item>
            <ListGroup.Item>SwiftによるiOSアプリ開発 (経験6ヶ月)</ListGroup.Item>
            <ListGroup.Item>Node.jsによるLambda Function開発 (経験1年)</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>

      <hr className="featurette-divider"/>

      <Jumbotron fluid='true'>
        <Container className='text-center' id="member">
          <Row className='justify-content-center'>
            <Col sm='10' md='8' lg="6">
              <p className="h3">代表社員</p>
              <p>
                <img src="/ibuki_suzuki.jpg" style={{height: 250, borderRadius: 50, boxShadow: '0 0.25rem 0.75rem rgba(0, 0, 0, .05)'}}/>
              </p>
              <p className="h2">鈴木新芽</p>
              <p className='text-justify'>
                略歴:<br />
                東京大学大学院にて修士(情報理工学)を取得。富士通, REAPRA Venturesを経てフリーランスとして活動開始。その後、合同会社イブキを設立。
              </p>
              <p><a href="https://www.linkedin.com/in/ibukisuzuki/">LinkedIn</a> <a href="https://github.com/ibuki/">GitHub</a></p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <hr className="featurette-divider"/>

      <Container id="practice">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">人を尊重します</h2>
            <p class="lead mt-3">メンバーの感覚を大事にし、対話で意図を聞き出します。成果物・業務フローを共に確認して、直接の感想を伺います。</p>
          </div>
          <div class="col-md-5">
            {/* <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" /> */}
          </div>
        </div>

      <hr className="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">コードを批判します</h2>
            <p class="lead mt-3">論理的な判断ができる人でも、知識の間違いはありえます。個人を批判せず、コード記述のやり方・仕事の進め方を批判します。</p>
          </div>
          <div class="col-md-5 order-md-1">
            {/* <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image" /> */}
          </div>
        </div>
      <hr className="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">時間を大切にします</h2>
            <p class="lead mt-3">成果を上げつつ、メンバーが成長することでチームがスピードを維持します。会議でもコーディングでも時間への意識を重要視します。</p>
          </div>
          <div class="col-md-5">
            {/* <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/> */}
          </div>
        </div>
      </Container>

      <hr className="featurette-divider"/>

      <Container id="company">
        <p className="h3 text-center">会社情報</p>
        <Row className='justify-content-center mt-3'>
          <Col md="10" lg="8">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row" className='text-right' width="50%" >会社名</th>
                  <td>合同会社イブキ</td>
                </tr>
                <tr>
                  <th scope="row" className='text-right'>代表社員</th>
                  <td>鈴木新芽</td>
                </tr>
                <tr>
                  <th scope="row" className='text-right'>設立</th>
                  <td>2020年6月</td>
                </tr>
                <tr>
                  <th scope="row" className='text-right'>社員数</th>
                  <td>1名</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>

      <hr className="featurette-divider"/>

      <Container>
        <Row className='mt-3 justify-content-center'>
          <Col md="10" lg="8">
            <p className="h3 mb-3 text-center" id="contact">お仕事の依頼・お問い合わせ</p>
            <p>フリーランスとして活動していますが、正社員で働く職場も探しています。</p>
            <p>フリーランスとしての稼働では、成果物単位ではなく稼働時間に対して料金をいただきたいと考えています。現代で活躍できるアプリケーションは複雑で、事前に要件を決めきれるものではありません。まだ見ぬシステムを一緒に考えましょう。</p>
            <p>現在は時給5000円で仕事を探していますが、僕がお役に立てるかどうかわかるまでは料金はいただきません。</p>
            <p>コードレビューが必要なリポジトリの提示でも、ジャストアイディア状態のビジネスプランでもなんでもご連絡ください。</p>
            <p className='text-center'>
              <a href='https://forms.gle/W2PM7XgSSrEewoYF9' target='_blank' class="btn btn-success btn-lg">問い合わせフォーム</a>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
