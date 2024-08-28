# 1. React 개발환경 설정

## 1-1. Node 다운로드

### 1-1-1. Node.js 홈페이지 접속

[Node.js 홈페이지](https://nodejs.org/en)

<br>

### 1-1-2. Node.js 다운로드

![Node.js 다운로드](./images/node001.png)

<br><br>

## 1-2. Node 설치

### 1-2-1. 설치 시작

다운로드 디렉토리에서 `node-v20.11-x64.msi` 또는 `node-v18.16-x64.msi` 를 더블클릭하여 설치 화면이 나오면, [Next] 버튼을 누릅니다.

![Node 설치](./images/node002.png)

<br>

### 1-2-2. 약관 동의 페이지

![Node 설치](./images/node003.png)

<br>

### 1-2-3. 설치 위치 지정

![Node 설치](./images/node004.png)

<br>

### 1-2-4. 설치할 패키지 또는 부가기능 선택

![Node 설치](./images/node005.png)

<br>

### 1-2-5. Native Module 을 위한 도구 선택

![Node 설치](./images/node006.png)

<br>

### 1-2-6. Node 도구 준비 화면

![Node 설치](./images/node007.png)

<br>

### 1-2-7. Node 환경 설정

![Node 설치](./images/node008.png)

<br>

### 1-2-8. Native Module 을 위한 도구 선택

![Node 설치](./images/node009.png)

![Node 설치](./images/node010.png)

![Node 설치](./images/node011.png)

<br><br>

## 1-3. Node 기본 명령

### 1-3-1. Node 설치 확인

![Node 설치확인](./images/node101.png)

![Node 설치확인](./images/node102.png)

<br>

### 1-3-2. Node 자바스크립트 실행

**1. Hello.js 작성**

```javascript
console.log("Hello");
```

<br>

**2. Node 에서 Hello.js 실행**

![Node 자바스크립트 실행](./images/node103.png)

<br><br>

## 1-4. Visual Studio Code 다운로드

Visual Studio Code는 마이크로소프트 사에서 개발한 코드 편집이 가능한 에디터로서 문서 작업을 할 때 MS-WORD나 아래한글과 같은 워드프로세서를 사용하는 것처럼 코딩을 할 때는 VS Code와 같은 코드 편집 프로그램을 사용합니다.

Visual Studio는 IDE(Intergrated Development Environment)로서 통합 개발 환경으로 개발과 관련된 모든 작업을 수행할 수 있는 공간을 제공하지만, VS Code는 내부적인 환경을 구축하지 않아도 사용이 가능하지만, Visual Studio는 프로그램이 다소 무겁기 때문에 용량이 매우 크고 설치 과정도 복잡합니다.

<br>

## 1-4-1. Visual Studio Code 다운로드 페이지로 이동하기

**VS Code 바로가기**  [VS Code 다운로드](https://code.visualstudio.com/)

<br>

## 1-4-2. Visual Studio Code 다운로드

![VS Code 다운로드](./images/vscode001.png)

<br><br>

## 1-5. Visual Studio Code 설치

### 1-5-1. 설치 시작

다운로드한 설치 파일인 `` 을 실행합니다.

<br>

### 1-5-2. 라이선스 사용권 계약 동의

![설치 시작](./images/vscode002.png)

위와 같은 페이이지가 로딩되면, '동의합니다' 를 선택하고, [Next] 버튼을 누릅니다.

<br>

### 1-5-3. 설치 디렉토리 지정 

![설치 시작](./images/vscode003.png)

"Visual Studio Code"를 "Applications" 폴더에 설치하도록 설정합니다.

<br>

### 1-5-4. 시작 메뉴 폴더 선택

![설치 시작](./images/vscode004.png)

`[다음]` 버튼을 클릭합니다.

<br>

### 1-5-5. 추가 작업 선택

![설치 시작](./images/vscode005.png)

원하는 추가 작업을 선택하고, `[다음]` 버튼을 클릭하여 설치를 진행합니다.

<br>

### 1-5-6. 설치 준비 완료

![설치 시작](./images/vscode006.png)

`[설치]` 버튼을 클릭하여 설치를 진행합니다.

<br>

### 1-5-7. 설치 완료

![설치 종료](./images/vscode007.png)


설치가 완료 화면이 나오면 `[종료]` 버튼을 클릭합니다.

<br><br>

## 1-6. Visual Studio Code 환경 설정 및 확장 프로그램 설치

![VS Code 시작화면](./images/vscode008.png)

Visual Studio Code 를 실행하면, 초기화면이 나타납니다.

<br>

### 1-6-1. 탭 사용자 설정

react 나 Vue 에서 여러 블록의 단계로 구성되기 때문에 tab Size를 2로 바꾸는 것이 좋습니다.

<br>

**명령 입력줄 호출**

![VS Code 사용자 설정](./images/vscode008_1.png)

1. `[Ctrl + Shift + P]` 단축키 또는 `[View]-[Command Palette...]` 메뉴를 누릅니다.
2. 나타난 입력란에 `open use settings` 입력
3. `Preferences: Open User Settings` 를 선택합니다.

<br>

**탭 크기조절**

![VS Code 사용자 설정](./images/vscode008_2.png)

`Editor: Tab Size` 항목에 `2` 를 입력합니다.

<br>

**탭 크기조절 후 결과**

![VS Code 사용자 설정](./images/vscode008_3.png)

VS Code 화면 하단부의 상태표시줄에 `Spaces: 4` 가 `Spaces: 2` 로 변경되었는지 확인합니다.

<br><br>

### 1-6-2. 한국어 팩 설치

1. 메뉴나 대화 상자가 영어일 때 불편하신 분들은 한국어 팩을 설치할 수도 있습니다.
2. 영어가 편하신 분은 굳이 설치할 필요는 없습니다.

<br>

**한국어 팩 설치**

![VS Code 한국어 팩](./images/vscode009_1.png)

1. 화면 좌측의 `Extensions(Ctrl+Shift+X)` 아이콘을 선택
2. 입력란에 `korean` 을 입력
3. 목록 중 `korean language pack for visual studio code` 의 우측 `Install` 클릭
4. 설치 완료 후 `Restart Now` 클릭

<br>

**한국어 팩 설치 후 화면**

![VS Code 한국어 팩](./images/vscode009_2.png)

모든 메뉴가 한국어로 변경되었는지 확인합니다.

<br><br>

### 1-6-3. Reactjs code snippets

리액트에서 자주 사용하는 코드 단축어들을 활용하여 코드 블록을 자동 완성 해주는 플러그인

<br>

![Reactjs code snippets](./images/vscode010.png)

1. 화면 좌측의 `Extensions(Ctrl+Shift+X)` 아이콘을 선택
2. 입력란에 `Reactjs` 을 입력
3. 목록 중에서 `Reactjs code snippets` 의 우측 `Install` 또는 `설치` 클릭

<br>

자주 사용하는 키워드를 입력하여 선택하면 우측의 기본 클래스형 컴포넌트를 만들어 주게 됩니다.

| keyword | content |
|--------|---------------------------------------------------|
| rcc | 클래스 컴포넌트 생성 |
| rrc | 클래스 컴포넌트와 react-redux 리덕스를 연결하여 생성 |
| rcjc | import와 export 없이 클래스 컴포넌트 생성 |
| rwwd | import 없이 클래스 컴포넌트 생성 |
| rsc | 화살표 함수형 컴포넌트 생성 |
| rsf | 함수형 컴포넌트 생성 |

![Reactjs code snippets](./images/vscode010_1.png)

<br><br>

### 1-6-4. Live Server

현재 작성하고 있는 문서의 내용을 실시간으로 보여주는 기능으로 문서의 저장이 감지되면 자동으로 로컬 서버를 통해 웹브라우저에 수정사항을 반영해 줍니다.

![Live Server](./images/vscode011.png)

1. 화면 좌측의 `Extensions(Ctrl+Shift+X)` 아이콘을 선택
2. 입력란에 `Live` 을 입력
3. 목록 중에서 `Live Server` 의 우측 `Install` 또는 `설치` 클릭

<br><br>

### 1-6-5. Prettier

줄바꿈등의 스타일을 자동으로 변환해주며, 이클립스의 코드 포매터와 비슷합니다.

![Extensions](./images/vscode012.png)

1. 화면 좌측의 `Extensions(Ctrl+Shift+X)` 아이콘을 선택
2. 입력란에 `Prettier` 을 입력
3. 목록 중에서 `Prettier - Code Formatter` 의 우측 `Install` 또는 `설치` 클릭

<br><br>

### 1-6-6. Auto Rename Tag

태그의 이름을 변경 시 열고 닫는 태그를 한번에 같이 수정해줍니다.

![Extensions](./images/vscode013.png)

<br><br>

### 1-6-7. REST Client

![Extensions](./images/vscode014.png)

1. `.http / .rest` 확장자로 파일을 생성해 줍니다.
2. api호출 하나씩 "###"으로 구분하면 되며, `SendRequest` 라는 텍스트가 자동 생성 됩니다.

![Extensions](./images/vscode014_2.png)

<br><br>

### 1-6-8. Git history

특정 파일의 커밋 히스토리를 보고싶을때 사용합니다.

![Extensions](./images/vscode015.png)

<br>

마우스 우클릭 > Git : View file History 를 클릭하면 해당 파일, 라인에 대한 커밋 히스토리가 화면에 표시됩니다.

![Extensions](./images/vscode015_2.png)

<br><br>

### 1-6-9. Git Graph

커밋 로그들을 그래프 형태로 직관적으로 볼 수 있다.

![Extensions](./images/vscode016.png)

![Extensions](./images/vscode016_2.png)

<br><br>

### 1-6-10. Git Lens

코드의 특정 단락, 라인등에 커밋 관련 정보를 흐릿하게 노출해 주며, 마우스 커서의 위치를 이동하면 자세한 정보를 보여줍니다.

![Extensions](./images/vscode017.png)

![Extensions](./images/vscode017_2.png)

<br><br>

### 1-6-11. 테마(Theme) 변경

편집 및 에디터에 대한 작업 환경의 색상이나 아이콘의 형태를 변경할 수 있습니다.

<br>

![Extensions](./images/vscode018.png)

왼쪽 하단에 톱니바퀴 모양의 설정 아이콘을 클릭하거나 `[Ctrl+,]` 단축키를 누릅니다.

<br>

![Extensions](./images/vscode018_1.png)

입력란에 `Light` 검색어를 입력하면, 나오는 목록 중에서 `Default Light+` 를 선택합니다.

<br>

![Extensions](./images/vscode018_3.png)

위와 같이 테마가 변경되었음을 확인합니다.

<br><br>

### 1-6-12. ESLint 

코드 품질을 유지하고 일관된 코딩 스타일을 적용하게 해줍니다.

![Extensions](./images/vscode019.png)

<br><br>

## 1-7. React 프로젝트 생성

### 1-7-1. cmd 터미널에서 React 프로젝트 생성

**1. cmd 실행**

![cmd 터미널에서 React 프로젝트 생성](./images/cmd01.png)

<br>

**2. cmd 환경 설정**

![cmd 터미널에서 React 프로젝트 생성](./images/cmd02.png)

<br>

**3. cmd 에 표시될 색상 팔레트 선택**

![cmd 터미널에서 React 프로젝트 생성](./images/cmd03.png)

![cmd 터미널에서 React 프로젝트 생성](./images/cmd04.png)

<br>

**4. 디렉토리 이동**

![cmd 터미널에서 React 프로젝트 생성](./images/cmd05.png)

```bash
C:\Users\kkt09>d:
D:\>cd getRepository
D:\gitRepository>cd sunglee0517
D:\gitRepository\sunglee0517>cd react
```
<br>

**5. 새 프로젝트 생성**

![cmd 터미널에서 React 프로젝트 생성](./images/cmd06.png)

```bash
D:\gitRepository\sunglee0517\react> npx create-react-app chap01_start
```

![cmd 터미널에서 React 프로젝트 생성](./images/cmd07.png)

<br>

**6. 새 프로젝트 실행**

![cmd 터미널에서 React 프로젝트 실행](./images/cmd08.png)

```bash
D:\gitRepository\sunglee0517\react> cd chap01_start
D:\gitRepository\sunglee0517\react\chap01_start> npm start 
```

![cmd 터미널에서 React 프로젝트 실행](./images/cmd09.png)

<br><br>

### 1-7-2. Visual Studio Code의 터미널에서 React 프로젝트 생성

**1. 터미널 열기**

![터미널에서 React 프로젝트 생성](./images/terminal01.png)

<br>

**2. 터미널에서 새 프로젝트 생성**

![터미널에서 React 프로젝트 생성](./images/terminal02.png)

```bash
PS D:\gitRepository\sunglee0517\react> npx create-react-app chap02_basic
```

![터미널에서 React 프로젝트 생성](./images/terminal03.png)

<br>

**3. 새 프로젝트 실행**

![터미널에서 React 프로젝트 생성](./images/terminal04.png)

```bash
PS D:\gitRepository\sunglee0517\react> cd chap02_basic
PS D:\gitRepository\sunglee0517\react\chap02_basic> npm start
```

![터미널에서 React 프로젝트 생성](./images/terminal05.png)

![터미널에서 React 프로젝트 생성](./images/terminal06.png)

<br><br>

## 1-8. 프로젝트 패키지 관리

### 1-8-1. npm 패키지 관리

#### 1-8-1-1. 패키지 설치

```bash
npm install <패키지명>

# react-router-dom 패키지를 설치할 경우
npm install react-router-dom
```
<br>

**개발 의존성으로 패키지 설치**

```bash
npm install <패키지명> --save-dev

# eslint를 개발 의존성으로 설치할 경우
npm install eslint --save-dev
```

<br>

**특정 버전의 패키지 설치**

```bash
npm install <패키지명>@<버전>

# react의 18.0.0 버전을 설치할 경우
npm install react@18.0.0
```

<br>

**기존 package.json에 정의된 모든 패키지들을 설치**

```bash
npm install
```

<br>

#### 1-8-1-2. 패키지 삭제

```bash
npm uninstall <패키지명>

# lodash 패키지를 삭제할 경우
npm uninstall lodash
```

<br>

**개발 의존성에서 패키지 삭제**

```bash
npm uninstall <패키지명> --save-dev
```

<br>

#### 1-8-1-3. 패키지 업데이트

**모든 패키지 업데이트**

```bash
npm update
```

<br>

**특정 패키지 업데이트**

```bash
npm update <패키지명>
```

<br>

#### 1-8-1-4. 패키지 정보 확인

**설치된 패키지 목록 확인**

```bash
npm list
```

<br>

**전역으로 설치된 패키지 목록 확인**

```bash
npm list -g --depth=0
```

<br>

**패키지의 최신 버전 확인**

```bash
npm info <패키지명>
```

<br>

### 1-8-2. yarn 패키지 관리

#### 1-8-2-1. 패키지 설치

**프로젝트에 패키지 설치**

```bash
yarn add <패키지명>

# react-router-dom 패키지를 설치할 경우
yarn add react-router-dom
```

<br>

**개발 의존성으로 패키지 설치**

```bash
yarn add <패키지명> --dev

# eslint를 개발 의존성으로 설치할 경우
yarn add eslint --dev
```

<br>

**특정 버전의 패키지 설치**

```bash
yarn add <패키지명>@<버전>

# react의 18.0.0 버전을 설치하려면:
yarn add react@18.0.0
```

<br>

**package.json에 정의된 모든 패키지 설치**

```bash
yarn install
```

<br>

#### 1-8-2-2. 패키지 삭제

**패키지 삭제**

```bash
yarn remove <패키지명>
# lodash 패키지를 삭제할 경우
yarn remove lodash
```

<br>

#### 1-8-2-3. 패키지 업데이트

**모든 패키지 업데이트**

```bash
yarn upgrade
```

<br>

**특정 패키지 업데이트**

```bash
yarn upgrade <패키지명>
```

<br>

#### 1-8-2-4. 패키지 정보 확인

**설치된 패키지 목록 확인**

```bash
yarn list
```

<br>

**전역으로 설치된 패키지 목록 확인**

```bash
yarn global list
```

<br>

**패키지의 최신 버전 확인**

```bash
yarn info <패키지명>
```

<br><br>

## 1-9. Node 설치없이 CDN으로 React 시작하기

### 1-9-1. CDN React 실습

**chap01_start/cdn/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React CDN Example</title>
  <!-- React 및 ReactDOM CDN 링크 -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <!-- Babel CDN 링크 (JSX를 JavaScript로 변환하는 데 사용) -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  
  <!-- React 애플리케이션 코드 -->
  <script type="text/babel">
    // App 컴포넌트 정의
    function App() {
      return (
        <div>
          <h1>Hello, React with CDN!</h1>
          <p>This is a simple example using React with a CDN.</p>
        </div>
      );
    }

    // ReactDOM을 사용하여 App 컴포넌트를 렌더링
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
```

<br>

### 1-9-2. CDN index.html 파일

#### 1-9-2-1. HTML 파일 기본 구조

`<!DOCTYPE html>` : 문서의 타입을 HTML로 선언합니다.
`<html>`, `<head>`, `<body>` : HTML 문서의 구조를 정의합니다.

<br>

#### 1-9-2-2. CDN 링크

1. `<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>` : React의 UMD(Universal Module Definition) 빌드를 CDN을 통해 가져옵니다. crossorigin 속성은 CORS(Cross-Origin Resource Sharing)를 설정합니다.
2. `<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>` : ReactDOM의 UMD 빌드를 가져옵니다.
3. `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` : Babel을 CDN을 통해 가져옵니다. Babel은 JSX를 브라우저에서 직접 JavaScript로 변환해주는 역할을 합니다.

<br>

#### 1-9-2-3. React 애플리케이션 코드

`<script type="text/babel">` : 이 스크립트 블록은 Babel을 통해 JSX를 JavaScript로 변환합니다. type="text/babel" 속성은 Babel을 사용하여 이 스크립트를 처리하도록 지시합니다.

<br>

#### 1-9-2-4. App 컴포넌트

1. `function App() {...}` : App이라는 React 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 간단한 JSX를 반환합니다.

<br>

#### 1-9-2-5. ReactDOM.render

`ReactDOM.render(<App />, document.getElementById('root'));` : App 컴포넌트를 id="root"인 HTML 요소에 렌더링합니다. 이 요소는 HTML 파일의 <body> 내에 정의되어 있습니다.

<br>

#### 1-9-2-6. 실행 방법

1. 파일 저장: 위 코드를 index.html 파일로 저장합니다.
2. 브라우저에서 열기: 파일을 웹 브라우저에서 열면 React 애플리케이션이 렌더링된 것을 볼 수 있습니다.

<br><br><br>

# 2. React 시작

## 2-1. React 프로젝트

### 2-1-1. Component-Based Architecture (컴포넌트 기반 아키텍처)

리액트는 기본적으로 컴포넌트 기반 아키텍처를 사용합니다. 이 패턴은 UI를 독립적이고 재사용 가능한 컴포넌트로 나누어 관리하는 방식입니다.

**특징**

1. 각 컴포넌트는 상태와 props를 사용하여 독립적으로 동작합니다.
2. 컴포넌트는 계층 구조를 가지며, 부모 컴포넌트가 자식 컴포넌트를 포함할 수 있습니다.
3. 상태 관리와 렌더링 로직이 컴포넌트 내에 포함됩니다.

<br>

### 2-1-2. Container/Presentational Pattern (컨테이너/프레젠테이셔널 패턴)

이 패턴은 UI를 두 가지 종류의 컴포넌트로 나누는 방식입니다.
프레젠테이셔널 컴포넌트: UI를 렌더링하는 데만 집중하고, 상태나 데이터 로직을 포함하지 않습니다. 주로 props를 통해 데이터를 받습니다.
컨테이너 컴포넌트: 상태와 데이터 로직을 처리하며, 프레젠테이셔널 컴포넌트를 포함하여 데이터를 전달합니다.

**특징**

1. 관심사를 분리하여 컴포넌트를 보다 관리하기 쉽게 만듭니다.
2. 재사용성과 테스트 용이성을 증가시킵니다.

<br>

### 2-1-3. Flux Pattern (플럭스 패턴)

Facebook이 개발한 아키텍처로, 데이터 흐름을 단방향으로 제어하는 방식입니다. 주요 구성 요소는 Store, Action, Dispatcher, View입니다.

1. Store: 애플리케이션의 상태를 저장합니다.
2. Action: 상태를 변경하기 위한 이벤트를 기술합니다.
3. Dispatcher: 액션을 수신하고 이를 스토어에 전달합니다.
4. View: 사용자가 볼 수 있는 UI를 렌더링합니다.

**특징**

1. 데이터의 단방향 흐름을 통해 상태 관리를 단순화합니다.
2. 코드의 예측 가능성을 높이고, 디버깅을 용이하게 만듭니다.

<br>

### 2-1-4. Redux Pattern (리덕스 패턴)

Flux 패턴에서 발전된 상태 관리 라이브러리입니다. 글로벌 상태를 관리하는 데 중점을 두며, 상태를 Store로 중앙 집중화합니다.

1. Actions: 상태를 변경하는 이벤트를 설명합니다.
2. Reducers: 액션에 따라 상태를 업데이트하는 순수 함수입니다.
3. Store: 애플리케이션의 전체 상태를 저장합니다.

**특징**

1. 상태 관리가 일관되게 중앙에서 이루어지며, 상태 변경이 예측 가능하고 추적하기 쉬워집니다.
2. 미들웨어를 통해 비동기 작업 및 로깅 등의 추가 기능을 쉽게 통합할 수 있습니다.

<br>

### 2-1-5. Context API Pattern (컨텍스트 API 패턴)

React의 Context API를 사용하여 전역 상태를 관리하는 패턴입니다. 주로 컴포넌트 트리의 여러 단계에서 상태를 공유해야 할 때 사용됩니다.

1. Context Provider: 상태를 제공하는 컴포넌트입니다.
2. Context Consumer: 상태를 사용하는 컴포넌트입니다.

**특징**

1. 전역 상태를 컴포넌트 트리에서 간편하게 공유할 수 있습니다.
2. Context API를 사용하여 Redux와 같은 상태 관리 도구의 복잡성을 줄일 수 있습니다.

<br>

### 2-1-6. Hooks Pattern (훅스 패턴)

리액트 훅스를 사용하여 상태와 사이드 이펙트를 관리하는 패턴입니다. 함수형 컴포넌트에서 상태를 관리하고, 라이프사이클 메서드를 사용할 수 있도록 합니다.

1. useState: 상태를 추가하는 훅입니다.
2. useEffect: 사이드 이펙트를 처리하는 훅입니다.
3. useContext: 컨텍스트 API를 사용하여 상태를 공유하는 훅입니다.

**특징**

1. 상태 관리와 부수 효과 처리를 함수형 컴포넌트 내에서 간결하게 작성할 수 있습니다.
2. 재사용 가능한 로직을 커스텀 훅으로 추출할 수 있습니다.

<br>

### 2-1-7. MVVM Pattern (모델-뷰-뷰모델 패턴)

이 패턴은 주로 데이터 바인딩을 통해 UI와 비즈니스 로직을 분리하는 데 중점을 둡니다.

1. Model: 데이터와 비즈니스 로직을 담당합니다.
2. View: 사용자 인터페이스를 렌더링합니다.
3. ViewModel: View와 Model 사이의 데이터 바인딩 및 상태 관리를 담당합니다.

**특징**

1. 데이터 바인딩을 통해 View와 Model의 결합도를 낮춥니다.
2. 사용자 인터페이스와 비즈니스 로직 간의 의존성을 줄여 유지보수성을 높입니다.

<br>

### 2-1-8. Atomic Design Pattern (아토믹 디자인 패턴)

UI 컴포넌트를 원자, 분자, 유기체, 템플릿, 페이지로 계층화하여 구성하는 패턴입니다.

1. Atoms: 가장 기본적인 UI 요소 (버튼, 입력 필드 등).
2. Molecules: 여러 원자가 조합된 UI 구성 요소 (검색 바, 카드 등).
3. Organisms: 더 복잡한 UI 구성 요소 (네비게이션 바, 폼 등).
4. Templates: 페이지의 레이아웃을 정의하는 구성 요소.
5. Pages: 최종 사용자에게 보여지는 페이지.

**특징**

1. UI를 계층적으로 구성하여 컴포넌트의 재사용성을 높입니다.
2. 디자인 시스템과 구성 요소를 일관되게 관리할 수 있습니다.

<br>

### 2-1-9. Feature-Based Pattern (기능 기반 패턴)

기능(또는 모듈) 단위로 애플리케이션을 구성하는 패턴입니다. 각 기능은 자신의 컴포넌트, 상태, 스타일, 그리고 관련 로직을 포함합니다.

**특징**

1. 각 기능이 독립적으로 관리되며, 모듈화된 구조로 코드의 가독성과 유지보수성을 향상시킵니다.
2. 팀워크와 협업 시 기능 단위로 작업을 나누기 용이합니다.

<br><br>

## 2-2. React 프로젝트 구조

### 2-2-1. 프로젝트 파일 트리 구조

```lua
chap01_start/
├── node_modules/
│   └── ... 
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

<br>

### 2-2-2. React 프로젝트 파일 설명

**node_modules/**

설명: 프로젝트에서 사용하는 모든 npm 패키지가 저장되는 디렉토리입니다. 이 디렉토리는 자동으로 생성되며, package.json에 정의된 의존성에 따라 npm 또는 yarn에 의해 관리됩니다.

<br>

**public/**

1. `favicon.ico` : 브라우저 탭에 표시되는 아이콘 파일입니다.

2. `index.html` : React 애플리케이션이 렌더링될 HTML 파일입니다. div#root 요소가 이 파일 내에 포함되어 있으며, React 컴포넌트가 이 요소에 렌더링됩니다.

3. `logo192.png` : 웹 애플리케이션의 192x192 픽셀 아이콘입니다. PWA (Progressive Web App) 지원을 위해 사용됩니다.

4. `logo512.png` : 웹 애플리케이션의 512x512 픽셀 아이콘입니다. 역시 PWA 지원에 사용됩니다.

5. `manifest.json` : 웹 애플리케이션의 메타데이터를 포함하는 파일로, 앱의 아이콘, 이름, 시작 URL 등을 정의합니다. PWA에 필요한 파일입니다.

6. `robots.txt` : 웹 크롤러(로봇)에 대한 지침을 포함하는 파일입니다. 웹사이트의 검색엔진 최적화(SEO)에 영향을 줄 수 있습니다.

<br>

**src/**

1. `App.css` : `App.js` 컴포넌트의 스타일을 정의하는 CSS 파일입니다.

2. `App.js` : 기본 React 컴포넌트 파일로, 애플리케이션의 루트 컴포넌트입니다. 초기 상태에서 기본 JSX를 렌더링합니다.

3. `App.test.js` : App.js 컴포넌트의 테스트 파일입니다. 기본적으로 React Testing Library를 사용하여 작성됩니다.

4. `index.css` : 전체 애플리케이션에 적용되는 글로벌 CSS 스타일을 정의합니다.

5. `index.js` : 애플리케이션의 진입점 파일로, ReactDOM.render를 사용하여 App 컴포넌트를 `public/index.html` 의 `div#root` 요소에 렌더링합니다.

6. `logo.svg` : 기본 React 애플리케이션에서 사용하는 로고 SVG 파일입니다.

7. `reportWebVitals.js` : 웹 애플리케이션의 성능을 측정하기 위한 파일입니다. 기본적으로 성능 측정 도구를 설정하는 데 사용됩니다.

8. `setupTests.js` : 테스트 설정 파일로, React Testing Library와 같은 테스트 유틸리티를 설정하는 데 사용됩니다.

<br>

**.gitignore**

Git에서 무시할 파일 및 디렉토리 패턴을 정의하는 파일입니다. 일반적으로 node_modules, 빌드 아티팩트 등 버전 관리가 필요 없는 항목이 포함됩니다.

<br>

**package.json**

프로젝트의 의존성, 스크립트, 메타데이터를 정의하는 파일입니다. create-react-app에 의해 자동으로 생성되며, npm 또는 yarn을 통해 패키지 의존성을 관리합니다.

<br>

**package-lock.json**

package.json에 정의된 의존성의 정확한 버전을 기록하는 파일입니다. 의존성의 정확한 버전을 보장하여, 모든 개발 환경에서 동일한 패키지 버전이 사용되도록 합니다.

<br>

**README.md**

프로젝트에 대한 설명과 정보를 제공하는 마크다운 파일입니다. 프로젝트의 목적, 설치 방법, 사용법 등을 문서화합니다.

**yarn.lock (yarn을 사용하는 경우)**

yarn을 사용하는 프로젝트에서 패키지 의존성의 정확한 버전을 기록하는 파일입니다. npm의 package-lock.json과 유사한 기능을 합니다

<br><br>

## 2-3. React 프로젝트 작동 원리

### 2-3-1. 프로젝트 실행

설명: 프로젝트를 실행하기 위해, 다음 명령어를 사용할 수 있습니다:

```bash
npm start
```

또는

```bash
yarn start
```

원리: 이 명령어는 개발 서버를 시작하고, 브라우저에서 애플리케이션을 자동으로 엽니다. 기본적으로 http://localhost:3000에서 애플리케이션을 확인할 수 있습니다. create-react-app은 react-scripts 패키지를 사용하여 Webpack 개발 서버를 구성합니다.


<br><br>

### 2-3-2. 프로젝트 작업 순서

**index.html** : 이 파일은 기본 HTML 템플릿을 제공하며, React 애플리케이션이 렌더링될 루트 DOM 요소(div#root)를 포함합니다.

**index.js** : 이 파일에서 React의 ReactDOM.render를 사용하여 App 컴포넌트를 루트 DOM 요소에 렌더링합니다. 이 과정에서 App 컴포넌트와 그 자식 컴포넌트들이 브라우저에 표시됩니다.

**컴포넌트 및 상태 관리** : App.js에서 기본 컴포넌트를 정의하고, 상태와 props를 사용하여 UI를 구성합니다. 각 컴포넌트는 독립적으로 관리되며, 재사용 가능한 UI 구성 요소로 작동합니다.

**빌드 및 배포** : npm run build 명령어를 사용하여 프로덕션 모드로 애플리케이션을 빌드할 수 있습니다. 이 명령어는 최적화된 정적 파일을 build 디렉토리에 생성하며, 이를 서버에 배포하여 실제 운영 환경에서 애플리케이션을 실행할 수 있습니다.

<br><br>

### 2-3-3. 프로젝트 작동 원리

#### 2-3-3-1. 애플리케이션 초기화

index.js가 실행되면서, ReactDOM.createRoot와 root.render를 통해 App 컴포넌트를 public/index.html의 div#root 요소에 렌더링합니다.

<br>

#### 2-3-3-2. 루트 컴포넌트 렌더링

App.js가 실행되어 App 컴포넌트가 렌더링됩니다.
App 컴포넌트는 Component 컴포넌트를 포함하고, App 컴포넌트의 JSX가 가상 DOM에 생성됩니다.

<br>

#### 2-3-3-3. 하위 컴포넌트 렌더링

App 컴포넌트 내에서 Component 컴포넌트가 렌더링됩니다.
Component 컴포넌트의 JSX가 가상 DOM에 생성됩니다.

<br>

#### 2-3-3-4. 가상 DOM 업데이트

가상 DOM에서의 변경 사항이 실제 DOM에 반영됩니다.
React는 가상 DOM을 사용하여 효율적으로 업데이트를 수행하고, 실제 DOM에 변경 사항을 최소화합니다.

<br>

#### 2-3-3-5. 스타일 적용

각 컴포넌트에서 임포트된 CSS 파일이 적용됩니다. index.css, App.css, Component.css 파일들이 각각의 컴포넌트에 스타일을 적용하여 최종적인 UI를 완성합니다.

<br><br>

### 2-3-4. 프로젝트 구성요소

#### 2-3-4-1. 컴포넌트 (Components)

정의: 컴포넌트는 UI의 독립적이고 재사용 가능한 구성 요소입니다. 리액트 애플리케이션은 여러 개의 컴포넌트로 구성되며, 각 컴포넌트는 UI의 특정 부분을 렌더링합니다.

**종류**

함수형 컴포넌트: 함수로 정의되며, 주로 상태와 사이드 이펙트 처리를 위해 훅(Hooks)을 사용합니다.
클래스형 컴포넌트: ES6 클래스를 사용하여 정의되며, 상태와 라이프사이클 메서드를 직접 관리합니다.

```javascript
// 함수형 컴포넌트
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 클래스형 컴포넌트
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<br>

#### 2-3-4-2. JSX (JavaScript XML)

JSX는 JavaScript에서 XML/HTML과 유사한 문법을 사용할 수 있게 해주는 문법 확장입니다. JSX를 사용하면 컴포넌트를 정의할 때 HTML과 유사한 구문으로 UI를 구성할 수 있습니다.

**작동 원리** : JSX는 브라우저에서 직접 실행되지 않기 때문에, Babel과 같은 도구를 사용하여 일반 JavaScript로 변환됩니다.

```jsx
const element = <h1>Hello, world!</h1>;
```

<br>

#### 2-3-4-3. 상태와 Props

**상태 (State)**

컴포넌트 내부에서 관리되는 데이터입니다. 컴포넌트의 상태가 변경되면, 해당 컴포넌트와 자식 컴포넌트들이 재렌더링됩니다.

설정: useState 훅(함수형 컴포넌트) 또는 `this.state`와 `this.setState`(클래스형 컴포넌트)를 사용하여 설정합니다.

**함수형 컴포넌트**

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

<br>

**Props (Properties)**

컴포넌트 외부에서 전달되는 데이터입니다. 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용됩니다.

설정: 자식 컴포넌트를 사용할 때 속성(attribute)으로 전달됩니다.

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 사용
<Greeting name="Alice" />
```

<br>

#### 2-3-4-4. 가상 DOM (Virtual DOM)

리액트는 실제 DOM의 변경을 최소화하기 위해 가상 DOM을 사용합니다. 가상 DOM은 실제 DOM의 메모리 내 복사본으로, 변경 사항을 추적하고, 최적화된 업데이트를 실제 DOM에 반영합니다.

**작동 원리**

`렌더링` : 컴포넌트의 JSX가 가상 DOM에 렌더링됩니다.
`비교` : 새로운 가상 DOM과 이전 가상 DOM을 비교(diffing)합니다.
`업데이트` : 변경된 부분만 실제 DOM에 반영합니다.

<br>

#### 2-3-4-5. 렌더링 (Rendering)

렌더링은 React 컴포넌트의 JSX를 HTML로 변환하여 화면에 표시하는 과정입니다.

**작동 원리**

ReactDOM.render: 애플리케이션의 루트 컴포넌트를 실제 DOM의 특정 요소에 렌더링합니다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

<br>

#### 2-3-4-6. 업데이트 (Updates)

컴포넌트의 상태나 props가 변경되면 컴포넌트는 업데이트됩니다.

**작동 원리**

`상태 변경` : setState(클래스형) 또는 상태 훅(useState)(함수형)으로 상태를 변경합니다.
`재렌더링` : 상태나 props가 변경되면 리액트는 해당 컴포넌트를 재렌더링합니다.
`가상 DOM 업데이트` : 가상 DOM이 업데이트되며, 변경된 부분만 실제 DOM에 적용됩니다.

<br>

#### 2-3-4-7. 라이프사이클 (Lifecycle)

정의: 컴포넌트의 생애 주기를 정의하는 메서드나 훅입니다.

**클래스형 컴포넌트**

`componentDidMount` : 컴포넌트가 마운트된 후 호출됩니다.
`componentDidUpdate` : 컴포넌트가 업데이트된 후 호출됩니다.
`componentWillUnmount` : 컴포넌트가 언마운트되기 전에 호출됩니다.

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    return <div>My Component</div>;
  }
}
```

<br>

**함수형 컴포넌트**

`useEffect` : 컴포넌트의 생애 주기 메서드를 처리하는 훅입니다.

```javascript
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component did mount');
  }, []);

  return <div>My Component</div>;
}
```

<br><br>

## 2-4. React 프로젝트 기본 문법

### 2-4-1. index.js

**chap02_basic/src/index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

<br><br>

### 2-4-2. index.css

**chap02_basic/src/index.css**

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.title {
  text-align: center;
  font-size: 48px;
  line-height: 2;
  padding-top: 1em;
  padding-bottom: 0.5em;
}

.btn {
  text-decoration: none;
  display: inline-block;
  padding: 16px;
  font-size: 16px;
  color: #fff;
  background-color: deepskyblue;
  border-radius: 8px;
}
```

<br><br>

### 2-4-3. App.js

Contents 컴포넌트를 자식 컴포넌트로 적용

**chap02_basic/src/App.js**

```javascript
import './App.css';
import Contents from "./components/Contents"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Basic
        </a>
      </header>
      <Contents />
      <footer className="App-footer">
        <p className="">ⓒ 2024. Sunglee0517. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
```

<br><br>

### 2-4-4. App.css

App 컴포넌트의 스타일 적용

**chap02_basic/src/App.css**

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

.App-footer {
  border-top:5px solid #828384;
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.container {
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 60vh;
}
```

<br><br>

### 2-4-5. Contents.js

contents 영역의 Contents 컴포넌트 작성

**chap02_basic/src/component/Contents.js**

```javascript
import React from 'react';

function Contents(props) {
    return (
        <div id="contents" className="container">
            <h2 className="title">React Basic</h2>
            <hr/>
            <br/><button type="button" className="btn">버튼</button><br/>
        </div>
    );
}

export default Contents;
```

<br><br>

### 2-4-6. 프로젝트 실행

```bash
PS D:\gitRepository\sunglee0517\react\chap02_basic> npm start       # 개발자 모드 실행
PS D:\gitRepository\sunglee0517\react\chap02_basic> npm build       # 빌드 명령
PS D:\gitRepository\sunglee0517\react\chap02_basic> npx serve build # 서버 실행       
```

![프로젝트 실행](./images/ch02_basic01.png)

App 컴포넌트에 자식 컴포넌트인 Contents 컴포넌트를 마운팅시키고, 컨텐츠 영역을 추가하였습니다.

## 2-5. React 애플리케이션 실행 순서

index.html => index.js => App.js => 렌더링

1. 브라우저는 `public/index.html` 파일을 로드합니다.
2. ReactDOM이 `src/index.js` 에서 `App.js` 컴포넌트를 root DOM 노드에 렌더링합니다.
3. `App.js` 는 전체 애플리케이션의 UI 구조를 정의하고, 필요한 하위 컴포넌트를 포함시킵니다.
4. 컴포넌트들이 필요한 시점에 렌더링되고, UI가 구성됩니다.

<br>

### 2-5-1. index.html 

React 애플리케이션이 렌더링될 기본 HTML 파일로, `id="root"` 를 가진 `<div>` 가 포함되어 있습니다. 
이 요소는 React가 컴포넌트를 렌더링할 위치를 정의합니다.

**public/index.html**

1. 역할: React 애플리케이션이 렌더링되는 기본 HTML 파일입니다.
2. 실행 시점: 브라우저가 React 애플리케이션을 로드할 때 가장 먼저 로드되는 파일입니다.
3. 내용: HTML 구조 안에 `<div id="root"></div>` 가 포함되어 있습니다. 이 div 요소는 React 컴포넌트가 렌더링될 위치입니다.

<br><br>

### 2-5-2. index.js 

React 애플리케이션의 진입점으로, ReactDOM.createRoot를 사용하여 `id="root"` 요소에 App 컴포넌트를 렌더링합니다.

**src/index.js**

1. 역할: React 애플리케이션의 진입점(entry point)입니다. 이 파일에서 ReactDOM을 사용하여 App 컴포넌트를 root 요소에 렌더링합니다.
2. 실행 시점: 브라우저가 애플리케이션을 로드하면서 index.js가 실행됩니다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 글로벌 스타일
import App from './App'; // 메인 컴포넌트

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

1. React와 ReactDOM을 임포트합니다.
2. `index.css` 와 App 컴포넌트를 임포트합니다.
3. `ReactDOM.createRoot` 를 사용하여 root 요소에 React 애플리케이션을 렌더링합니다.
4. `<React.StrictMode>` 는 개발 모드에서 잠재적인 문제를 강조 표시합니다.

<br><br>

### 2-5-3. App.js 

**src/App.js**

1. 역할: 애플리케이션의 메인 컴포넌트입니다. 이 파일은 React 애플리케이션의 기본 UI 구조를 정의합니다.
2. 실행 시점: index.js에서 호출된 후 실행됩니다.
3. 애플리케이션의 메인 컴포넌트로, 기본 UI 구조와 하위 컴포넌트를 정의합니다.

```jsx
import React from 'react';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
```

1. React를 임포트하고, `App.css` 를 임포트하여 컴포넌트 스타일을 적용합니다.
2. App 함수 컴포넌트를 정의하고 JSX를 반환합니다.
3. App 컴포넌트를 내보내어 다른 파일에서 사용할 수 있게 합니다.
4. MyComponent를 App 컴포넌트에서 임포트하여 사용합니다.
5. App 컴포넌트 내에서 MyComponent를 렌더링하여 UI를 확장합니다.

<br><br>

### 2-5-4. 컴포넌트 폴더 (src/components/)

1. 역할: 개별 컴포넌트 파일들이 위치하는 폴더입니다. `App.js` 에서 필요한 컴포넌트를 가져와 사용합니다.
2. 실행 시점: `App.js` 가 렌더링될 때 해당 컴포넌트들이 사용됩니다.
3. `src/components/` : 재사용 가능한 React 컴포넌트들이 위치하는 폴더입니다.

```jsx
// src/components/MyComponent.js
import React from 'react';

function MyComponent() {
  return <div>This is my component!</div>;
}

export default MyComponent;
```

1. MyComponent라는 새로운 컴포넌트를 정의합니다.
2. 이 컴포넌트는 단순한 div 요소를 반환합니다.
3. MyComponent를 내보내어 다른 파일에서 사용할 수 있게 합니다.

<br><br><br>

# 3. JSX 문법 및 사용

## 3-1. JSX 기본

```jsx
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

1. JSX는 JavaScript의 확장 문법으로, HTML처럼 작성할 수 있습니다. 
2. `h1` 태그에 "I Love JSX!" 라는 텍스트를 담은 JSX 요소를 정의하고, React의 ReactDOM.createRoot를 사용해 `id="root"` 를 가진 DOM 요소에 렌더링합니다.

<br><br>

## 3-2. JSX 없이 진행

```jsx
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

1. JSX를 사용하지 않고 `React.createElement` 함수를 직접 사용하여 동일한 결과를 생성합니다. 
2. JSX가 JavaScript로 변환되는 방식입니다.

<br><br>

## 3-3. JSX 내 표현식 사용

```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```

1. JSX 구문 안에서 `{}` 를 사용하여 JavaScript 표현식을 삽입할 수 있습니다. 
2. `5 + 5` 계산 결과인 10이 표시됩니다.

<br><br>

## 3-4. 긴 블록 작성

```javascript
const myElement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
```

1. JSX에서는 긴 블록을 괄호로 묶어 가독성을 높일 수 있습니다. 여기서는 `ul` 리스트를 정의하여 여러 `li` 항목을 포함합니다.

<br><br>

## 3-5. 루트 요소는 하나로 묶어야 함

```jsx
const myElement = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
);
```

1. JSX에서는 반환하는 요소가 반드시 하나의 루트 요소로 묶여 있어야 합니다. 
2. 두 개의 `p` 요소를 `div` 로 감싸고 있습니다.

<br><br>

## 3-6. React.Fragment 또는 빈 태그로 묶기

```jsx
const myElement = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </>
);
```

1. `React.Fragment` 또는 빈 태그 `<>.....</>` 를 사용하여 추가적인 DOM 요소 없이 여러 요소를 그룹화할 수 있습니다.

<br><br>

## 3-7. Self-Closing Tag

```jsx
const myElement = <input type="text" />;
```

1. JSX에서는 모든 self-closing 태그에 `/` 를 추가해야 합니다. 
2. 닫는 태그 부분은 HTML에서 필수는 아니지만 JSX에서는 표준입니다.

<br><br>

## 3-8. className 속성 사용

```jsx
const myElement = <h1 className="myclass">Hello World</h1>;
```

1. HTML의 class 속성은 JSX에서는 className으로 지정해야 합니다. 
2. 자바스크립트의 class 키워드와의 충돌을 피하기 위한 것입니다.

<br><br>

## 3-9. if 문 활용

```jsx
const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}

const myElement = <h1>{text}</h1>;
```

1. JSX 내에서는 JavaScript 조건문을 사용해 변수를 설정하고 이를 JSX에서 표현할 수 있습니다. 
2. x가 10보다 작으면 text를 "Hello"로 변경합니다.

<br><br>

## 3-10. 삼항 연산자 사용

```jsx
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```

1. JSX 내에서 조건에 따라 다른 값을 렌더링하려면 삼항 연산자를 사용할 수 있습니다. 
2. x가 10보다 작으면 "Hello"를, 그렇지 않으면 "Goodbye"를 렌더링합니다.

<br><br>

## 3-11. 전체 코드

**프로젝트 생성**

```bash
PS D:\gitRepository\sunglee0517\react> npx create-react-app chap03_jsx
```

<br>

**chap03_jsx/src/App.js 편집**

```jsx
import './App.css';

function App() {
  const myElement1 = <h1>React is {5 + 5} times better with JSX</h1>;
  const myElement2 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
  );
  const myElement3 = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
  );
  const myElement4 = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </>
  );
  const myElement5 = <input type="text" />;
  const myElement6 = <h1 className="myclass">Hello World</h1>;

  const x = 5;
  let text = "Goodbye";
  if (x < 10) {
      text = "Hello";
  }
  const myElement7 = <h1>{text}</h1>;

  const myElement8 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <div>{myElement1}</div>
        <div>{myElement2}</div>
        <div>{myElement3}</div>
        <div>{myElement4}</div>
        <div>{myElement5}</div>
        <div>{myElement6}</div>
        <div>{myElement7}</div>
        <div>{myElement8}</div>
      </header>
    </div>
  );
}

export default App;
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react> cd chap03_jsx
PS D:\gitRepository\sunglee0517\react\chap03_jsx> npm start
```

![JSX](./images/ch03_jsx01.png)

<br><br><br>

# 4. Component 문법 및 사용

**프로젝트 구조**

```lua
chap04_component/
├── public/
├── src/
│   ├── components/
│   │   ├── Car.js
│   │   ├── Car2.js
│   │   ├── Air.js
│   │   ├── MyComponent.js
│   │   ├── MyComponent2.js
│   │   ├── MyComponent3.js
│   │   ├── Greeting.js
│   │   └── Counter.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
         
<br>

**프로젝트 생성**

```bash
PS D:\gitRepository\sunglee0517\react> npx create-react-app chap04_component
```

## 4-1. React 컴포넌트 개요

### 4-1-1. class 형 컴포넌트

**chap04_component/src/components/Car.js**

```jsx
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}
```

<br><br>

### 4-1-2. 함수형 컴포넌트

**chap04_component/src/components/Car2.js**

```jsx
function Car2() {
    return <h2>Hi, I am a Car2!</h2>;
}
```

<br>

**chap04_component/src/components/Air.js**

```jsx
const Air = () =>{
     return <h2>Hi, I am a Airplane!</h2>;
}
```

1. React 컴포넌트는 재사용 가능한 JavaScript 코드 스니펫입니다. 
2. 클래스형 컴포넌트: `class Car extends React.Component` 를 사용하여 컴포넌트를 정의합니다. 
    render 메서드를 통해 UI를 반환합니다.
3. 함수형 컴포넌트: `function Car()` 또는 화살표 함수 `const Car = () =>` 를 사용하여 컴포넌트를 정의합니다.     
    함수에서 직접 UI를 반환합니다.

<br><br>

## 4-2. 컴포넌트 렌더링

**컴포넌트 생성 (UI 요소에 랜더링)**

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

컴포넌트 렌더링: `ReactDOM.createRoot` 를 사용하여 `id="root"` 를 가진 DOM 요소를 선택하고, `root.render(<Car />)` 를 호출하여 Car 컴포넌트를 렌더링합니다.

<br><br>

## 4-3. Props를 통한 데이터 전달

생성한 컴포넌트는 props 통해서 상위 컴포넌트에서 전달에 데이터를 받을 수 있다

```jsx
function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);
```

1. Props: 컴포넌트에 데이터를 전달하기 위해 props를 사용합니다. 
2. Car 컴포넌트는 color라는 prop을 받아 이를 표시합니다. 
3. `root.render(<Car color="red"/>);` 를 통해 color prop에 "red" 값을 전달합니다.

<br><br>

## 4-4. 컴포넌트 안에 함수형 컴포넌트 사용

1. 컴포넌트 안에 함수형 컴포넌트를 만들어 사용하는 경우 "재사용성이 떨어진다" 라는 단점이 있습니다.
2. `List.js` 또는 `List.jsx` 와 같이 별도의 컴포넌트 파일로 작성하는 경우는 "재사용성이 높아진다" 라는 장점이 있습니다.
3. 컴포넌트 안에서 함수형 컴포넌트 사용을 하는 경우에는 컴포넌트 내부에 다른 함수형 컴포넌트를 정의할 수 있지만, 이는 재사용성에 문제가 있을 수 있습니다. 따라서, 별도의 파일로 분리하면 재사용성이 높아집니다.

<br><br>

## 4-5. React 컴포넌트 정의와 폴더 구조

1. 리액트 컴포넌트 정의: UI 를 구성하는 기본 단위 
2. 리액트 컴포넌트가 많은 경우는 `components`  폴더에 구분하여 컴포넌트를 생성합니다.
3. `부모-자식` 간 재사용성의 문제가 발생하는 경우에는 부모에 자식 props 를 값을 전달합니다.

<br>

**리액트 컴포넌트의 특징**

1. 재사용성이 높아집니다. 
2. 단일 책임의 원칙으로 하나의 컴포넌트에 단일 기능을 적용합니다.
3. 상태관리가 필요합니다.
4. 부모 컴포넌트와 자식 컴포넌트 간의 props를 활용하여 값 전달합니다.

<br><br>

## 4-6. 함수형 컴포넌트의 예시

**chap04_component/src/components/MyComponent.js**

```jsx
function MyComponent() {
    return <h1>Hello, World!</h1>;
}
```

<br>

**chap04_component/src/components/MyComponent2.js**

```jsx
const MyComponent2 = () => {
    return <h1>Hello, World2!</h1>;
};
```

1. 함수형 컴포넌트는 간단하게 UI를 반환하는 함수로 정의됩니다. 
2. 함수형 컴포넌트와 화살표 함수 모두 사용 가능합니다.

<br><br>

## 4-7. 클래스형 컴포넌트 예제

**chap04_component/src/components/MyComponent3.js**

```jsx
import React, { Component } from 'react';
class MyComponent3 extends Component {
    render() {
        return <h1>Hello, World3!</h1>;
    }
}
```

1. Component 클래스를 상속받아 render 메서드를 통해 UI를 반환합니다. 
2. 클래스형 컴포넌트 방식은 React의 초기 버전에서 많이 사용되었습니다.

<br><br>

## 4-8. 컴포넌트 간 데이터 전달

**chap04_component/src/components/Greeting.js**

```jsx
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```

<br>

**chap04_component/src/App.js**

```jsx
function App() {
    return <Greeting name="Alice" />;
}
```

1. 데이터 전달: 컴포넌트 간 데이터 전달은 props를 통해 이루어집니다. 
2. Greeting 컴포넌트는 name prop을 받아 UI를 렌더링하고, App 컴포넌트에서 Greeting 컴포넌트를 렌더링하면서 name prop에 "Alice" 값을 전달합니다.

<br><br>

## 4-9. 컴포넌트 상태 관리 (Hook 사용)

**chap04_component/src/component/Counter.js**

```jsx
import React, { useState } from 'react';

const Counter = () => {
    // useState 훅을 사용하여 count 상태와 setCount 상태 업데이트 함수를 정의
    const [count, setCount] = useState(10);

    // 카운트를 증가시키는 함수
    const incrementCount = () => {
        setCount(count + 1);
    };

    // 컴포넌트의 UI를 정의
    return (
        <div>
            <h1>Current Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default Counter;
```

<br><br>

## 4-10. Component 애플리케이션 코드

**chap04_component/src/App.js**

```jsx
import './App.css';
import Car from './component/Car';
import Car2 from './component/Car2';
import Air from './component/Air';
import MyComponent from './component/MyComponent';
import MyComponent2 from './component/MyComponent2';
import MyComponent3 from './component/MyComponent3';
import Greeting from './component/Greeting';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <Car />
      <Car2 />
      <Air />
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
}

export default App;
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react> cd chap04_component
PS D:\gitRepository\sunglee0517\react\chap04_component> npm start
```

![chap04_component](./images/chap04_component01.png)

<br><br><br>

# 5. React 구성요소 조합(Composition)

**프로젝트 구조**

```lua
chap05_composition/
├── public/
├── src/
│   ├── components/
│   │   ├── Car.js
│   │   ├── Garage.js
│   │   ├── Airplane.js
│   │   ├── UsingAir.js
│   │   ├── Tv.js
│   │   ├── Sales.js
│   │   ├── myCom.js
│   │   ├── myCom2.js
│   │   ├── MyComponent.js
│   │   ├── MyComponent2.js
│   │   ├── MyComponent3.js
│   │   ├── Football.js
│   │   ├── Soccer.js
│   │   ├── Goal.js
│   │   ├── Boarding.js
│   │   ├── Passing.js
│   │   ├── Food.js
│   │   ├── Buy.js
│   │   ├── Eat.js
│   │   ├── MyForm.js
│   │   └── Todos.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
         
<br>

**프로젝트 생성**

```bash
PS D:\gitRepository\sunglee0517\react> npx create-react-app chap05_composition
```

<br>

## 5-1. Props

### 5-1-1. 기본 Props 사용

**chap05_composition/src/components/Car.js**

```jsx
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}
```

<br>

**chap05_composition/src/components/Garage.js**

```jsx
function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
        </>
    );
}
```

1. Car 컴포넌트: `props` 를 매개변수로 받아서 `props.brand` 값을 사용하여 `<h2>` 태그를 렌더링합니다.
2. Garage 컴포넌트: Car 컴포넌트를 사용하여 `brand prop` 을 "Ford"로 설정하고 있습니다. 이 brand 값이 Car 컴포넌트의 props로 전달됩니다.

<br><br>

### 5-1-2. 변수값을 Props로 전달하기

**chap05_composition/src/components/Airplane.js**

```jsx
function Airplane(props) {
    return <h2>I am a { props.brand }!</h2>;
}
```

<br>

**chap05_composition/src/components/UsingAir.js**

```jsx
function UsingAir() {
    const comName = "Asiana";
    return (
        <>
            <h1>Which airline do you fly?</h1>
            <Airplane brand={comName} />
        </>
    );
}
```

변수 사용: `comName` 변수에 "Asiana" 값을 할당하고, 이를 `Airplane` 컴포넌트에 `brand prop` 으로 전달합니다. 이렇게 하면 prop의 값이 변수에서 제공된 값으로 설정됩니다.

<br><br>

### 5-1-3. 객체를 Props로 전달하기

**chap05_composition/src/components/Tv.js**

```jsx
function Tv(props) {
    return <h2>I am a { props.brand.model }!</h2>;
}
```

<br>

**chap05_composition/src/components/Sales.js**

```jsx
function Sales() {
    const tvInfo = { name: "Samsung", model: "OLED SD95" };
    return (
        <>
            <h1>What product do you want to buy?</h1>
            <Tv brand={tvInfo} />
        </>
    );
}
```

객체 사용: tvInfo라는 객체를 생성하고 이를 Tv 컴포넌트에 brand prop으로 전달합니다. Tv 컴포넌트는 props.brand.model을 사용하여 모델 이름을 렌더링합니다.

<br><br>

### 5-1-4. Props의 구조 분해 할당

**chap05_composition/src/components/myCom.js**

```jsx
function myCom(props) {
    {props.name}
}
```

<br>

**chap05_composition/src/components/myCom2.js**

```jsx
function myCom2({name}) {
    {name}
}
```

props와 구조 분해 할당: `myCom(props)` 에서는 전체 `props` 객체를 매개변수로 받고, `props.name` 을 사용하여 개별 prop에 접근합니다.
구조 분해 할당: `myCom({name})` 에서는 `props` 객체에서 `name` 만을 직접 추출하여 변수로 사용합니다. 이렇게 하면 name을 직접 사용할 수 있습니다.

<br><br>

### 5-1-5. 구조 분해 할당 예제

**chap05_composition/src/App.js**

```jsx
function App() {
    return (
        <MyComponent name="John Doe" age={30} email="john@example.com" address="123 Main St" />
        <MyComponent2 name="John Doe" age={30} email="john@example.com" address="123 Main St" />
    );
}
```

<br>

**chap05_composition/src/components/MyComponent.js**

```jsx
function MyComponent({ name, age, email }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}
```

MyComponent: 여러 개의 `prop` 을 구조 분해 할당하여 `name`, `age`, `email` 만을 사용합니다. 이는 필요하지 않은 `prop`은 무시하고 필요한 값만 가져올 수 있는 방법입니다.

<br><br>

### 5-1-6. 나머지 Props 처리

**chap05_composition/src/components/MyComponent2.js**

```jsx
function MyComponent2({ name, age, ...rest }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Other props: {JSON.stringify(rest)}</p>
        </div>
    );
}
```

나머지 Props: `...rest` 구문을 사용하여 나머지 `props`를 객체로 받아 `JSON.stringify(rest)` 를 통해 표시합니다. 이는 전달된 `props` 중에서 `name`과 `age`를 제외한 나머지 `props`를 처리하는 방법입니다.

<br><br>

### 5-1-7. 특정 자원만 받기

**chap05_composition/src/App.js**

```jsx
function App() {
    const user = {
        name: "John Doe",
        birthdate: "1990-01-01",
        age: 30
    };

    return <MyComponent3 user={user} />;
}
```

<br>

**chap05_composition/src/components/MyComponent3.js**

```jsx
function MyComponent3({ user: { age } }) {
    return (
        <div>
            <p>Age: {age}</p>
        </div>
    );
}
```

객체에서 특정 값 추출: App 컴포넌트에서 `user` 객체를 `MyComponent3` 에 전달하고, `MyComponent3`에서는 `user` 객체에서 `age`만을 구조 분해 할당하여 사용합니다. 이를 통해 필요한 데이터만을 추출하여 사용할 수 있습니다

<br><br>

## 5-2. Event

### 5-2-1. JSX 문법에서 함수 호출

**chap05_composition/src/components/Football.js**

```jsx
function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}
```

1. shoot 함수: 이 함수는 클릭 이벤트가 발생했을 때 `alert("Great Shot!")`를 호출하여 경고 메시지를 표시합니다.
2. return 문: JSX를 반환하며, `<button>` 태그의 `onClick` 속성에 `shoot` 함수를 할당합니다.
3. `onClick={shoot}` : 버튼이 클릭되면 shoot 함수가 호출됩니다.
4. 버튼 텍스트는 "Take the shot!"입니다.

사용자가 버튼을 클릭하면 shoot 함수가 호출되어 "Great Shot!"이라는 메시지 경고창이 나타납니다.

<br><br>

### 5-2-2. 이벤트 객체 사용

**chap05_composition/src/components/Soccer.js**

```jsx
function Soccer() {
    const shoot = (a, b) => {
        alert(b.type);
    }

    return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
}
```

1. shoot 함수: 매개변수 a와 b를 받습니다.
2. `alert(b.type)` 를 호출하여 이벤트 객체의 type 속성을 경고창으로 표시합니다.
3. return 문: JSX를 반환하며, `<button>` 태그의 `onClick` 속성에 익명 화살표 함수를 사용하여 `shoot` 함수를 호출합니다.
4. `(event) => shoot("Goal!", event)` : 버튼이 클릭될 때, `event` 객체를 `shoot` 함수에 전달합니다.
5. "Goal!"은 `shoot` 함수의 첫 번째 인수로 전달됩니다.
6. event 객체는 브라우저의 기본 이벤트 객체로, 클릭 이벤트에 대한 정보를 포함합니다.

사용자가 버튼을 클릭하면, shoot 함수가 호출되며 "Goal!"과 이벤트 객체(event)가 전달됩니다.
shoot 함수는 `event.type` 속성을 경고창으로 표시합니다. `event.type`은 "click"과 같은 이벤트의 종류를 나타냅니다.

<br><br>

## 5-3. Conditional

### 5-3-1. if 문을 사용한 조건부 렌더링

**chap05_composition/src/components/Goal.js**

```jsx
function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}
```

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
```

1. `props.isGoal` 값을 `isGoal` 변수에 저장합니다.
2. if 문: `isGoal` 값이 `true`인 경우 `<MadeGoal />` 컴포넌트를 렌더링합니다. `false`인 경우 `<MissedGoal />` 컴포넌트를 렌더링합니다.

<br><br>

### 5-3-2. `&&` 논리 연산자를 사용한 조건부 렌더링

**chap05_composition/src/components/Boarding.js**

```jsx
function Boarding(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Boarding</h1>
            {cars.length > 0 &&
                <h2>You have {cars.length} cars in your boarding.</h2>
            }
        </>
    );
}
```

```jsx
const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Boarding cars={cars} />);
```

1. `props.cars` 값을 `cars` 변수에 저장합니다.
2. `&&` 논리 연산자: `cars.length > 0`이 `true`일 때만 뒤의 `<h2>` 태그가 렌더링됩니다. 조건이 `false`일 때는 아무 것도 렌더링하지 않습니다.

<br><br>

### 5-3-3. 삼항 연산자를 사용한 조건부 렌더링

**chap05_composition/src/components/Passing.js**

```jsx
function Passing(props) {
    const isPass = props.isPass;
    return (
        <>
            { isPass ? <MadePass /> : <MissedPass /> }
        </>
    );
}
```

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Passing isPass={false} />);
```

1. `props.isPass` 값을 `isPass` 변수에 저장합니다.
2. 삼항 연산자: `isPass` 값이 `true`이면 `<MadePass />` 컴포넌트를 렌더링하고, `false`이면 `<MissedPass />` 컴포넌트를 렌더링합니다.

<br><br>

## 5-4. React Lists

### 5-4-1. 목록 렌더링과 map 메서드 사용하기

**chap05_composition/src/components/Food.js**

```jsx
function Food(props) {
    return <li>I am a {props.brand}</li>;
}
```

<br>

**chap05_composition/src/components/Buy.js**

```jsx
function Buy() {
    const foods = ['Samyang', 'Nongsim', 'Otugi'];
    return (
        <>
            <h1>What do you eat?</h1>
            <ul>
                {foods.map((food) => <Food key={food} brand={food} />)}
            </ul>
        </>
    );
}
```

1. `props.brand`를 사용하여 자동차 브랜드를 렌더링합니다. 이 컴포넌트는 리스트 항목(`<li>`)으로 표시됩니다.
2. foods 배열을 선언하고, 각 자동차 브랜드에 대해 Food 컴포넌트를 생성합니다.
3. map 메서드: 배열의 각 요소를 변환하여 새로운 배열을 생성합니다. 여기서 map 메서드는 `foods` 배열의 각 요소를 Food 컴포넌트로 변환합니다.

<br><br>

### 5-4-2. key 속성을 사용한 목록 아이템의 고유성 보장

**chap05_composition/src/components/Eat.js**

```jsx
function Eat() {
    const eats = [
        { id: 1, brand: 'Samyang' },
        { id: 2, brand: 'Nongsim' },
        { id: 3, brand: 'Otugi' }
    ];
    return (
        <>
            <h1>What do you eat?</h1>
            <ul>
                {eats.map((eat) => <Eat key={eat.id} brand={eat.brand} />)}
            </ul>
        </>
    );
}
```

1. React는 목록 항목을 식별하고 추적하기 위해 key 속성을 사용합니다.
2. key는 각 항목을 고유하게 식별할 수 있는 값이어야 합니다. React는 key를 사용하여 목록을 효율적으로 업데이트하고 렌더링합니다.

<br><br>

## 5-5. React Form

### 5-5-1. useState와 handleChange를 사용한 폼 요소 만들기

**chap05_composition/src/components/MyForm.js**

```jsx
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    );
}
```

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

1. `import { useState } from "react";`: useState 훅을 React에서 가져옵니다. 이 훅은 함수형 컴포넌트에서 상태를 관리할 수 있게 해줍니다.
2. `import ReactDOM from "react-dom/client";` : ReactDOM의 createRoot 메서드를 가져옵니다. 이는 React 애플리케이션을 DOM에 렌더링하는 데 사용됩니다.
3. `function MyForm()` : MyForm이라는 함수형 컴포넌트를 정의합니다.
4. `const [myCar, setMyCar] = useState("Volvo");` : useState 훅을 사용하여 myCar라는 상태 변수를 선언하고, 초기값을 "Volvo"로 설정합니다. setMyCar는 myCar 상태를 업데이트하는 함수입니다.
5. `const handleChange = (event) => { setMyCar(event.target.value); }` : handleChange 함수는 `<select>` 요소의 값이 변경될 때 호출됩니다. 이 함수는 `event.target.value`를 통해 선택된 값을 가져와 setMyCar를 사용해 상태를 업데이트합니다.
6. `<form>` : 폼을 포함하는 태그입니다. 폼 안에는 드롭다운 메뉴가 포함되어 있습니다.
7. `<select value={myCar} onChange={handleChange}>` : value 속성은 `<select>` 요소의 현재 선택된 값을 myCar 상태로 설정합니다. onChange 속성은 드롭다운 메뉴의 값이 변경될 때 handleChange 함수를 호출하여 상태를 업데이트합니다.
8. `<option value="Ford">Ford</option>` : `<select>` 요소의 옵션들을 정의합니다. 각 옵션은 value와 사용자에게 표시될 텍스트를 포함합니다.
9. `const root = ReactDOM.createRoot(document.getElementById('root'));` : React 애플리케이션의 루트 DOM 노드를 찾고, createRoot를 사용하여 React 애플리케이션을 이 노드에 렌더링할 준비를 합니다.
10. `root.render(<MyForm />);` : MyForm 컴포넌트를 root DOM 노드에 렌더링합니다. 이로 인해 페이지에서 MyForm 컴포넌트가 표시됩니다.

<br><br>

## 5-6. React Memo

## 5-6-1. 리액트 컴포넌트의 렌더링

1. 컴포넌트는 자신의 state가 변경되거나 부모 컴포넌트가 렌더링 되었을 때 함께 렌더링이 됩니다.
2. React 컴포넌트는 상태(state)나 속성(props)이 변경될 때마다 자동으로 다시 렌더링됩니다.
3. 부모 컴포넌트가 렌더링될 때 자식 컴포넌트들도 함께 렌더링됩니다. 이는 React의 기본 동작 방식입니다.

<br>

### 5-6-2. React.memo의 개념

1. React.memo는 리액트에서 제공하는 고차 컴포넌트중 하나입니다. 
2. 고차 컴포넌트(HOC)는 어떤 컴포넌트를 인자로 받아서 새로운 컴포넌트를 반환해주는 컴포넌트입니다.
3. React.memo는 React에서 제공하는 고차 컴포넌트(HOC)입니다.
4. 고차 컴포넌트는 다른 컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 패턴입니다.
5. React.memo는 주어진 컴포넌트를 감싸서, 해당 컴포넌트의 props가 변경되지 않는 한 재렌더링을 방지합니다. 이는 성능 최적화에 도움을 줍니다.

<br><br>

### 5-6-3. 렌더링 최적화

1. 렌더링이 되어야 할 상황에 놓일 때마다 Prop check를 통해 props에 변화가 있다면 렌더링을 하고 변화가 없다면 기존의 렌더링 된 내용을 재사용하게 됩니다.
2. React.memo는 컴포넌트가 렌더링될 때 props를 비교하여, props에 변화가 있을 경우에만 컴포넌트를 다시 렌더링합니다.
3. 만약 props가 동일하다면, React는 이전에 렌더링된 결과를 재사용하여 렌더링 성능을 최적화합니다.

<br><br>

### 5-6-4. React.memo 사용이 적합한 상황

1. 컴포넌트가 같은 props로 자주 렌더링이 될 때
2. 컴포넌트가 렌더링이 될 때마다 복잡한 로직을 처리해야 할 때

<br>

### 5-6-5. React.memo 예제 코드

**chap05_composition/src/components/Todos.js**

```jsx
import { memo } from "react";

const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export default memo(Todos);
```

1. `import { memo } from "react";` : memo를 React에서 가져옵니다.
2. `const Todos = ({ todos }) => { ... }` : Todos 컴포넌트는 todos라는 prop을 받아 렌더링합니다.
3. `console.log("child render");` : 컴포넌트가 렌더링될 때마다 콘솔에 메시지를 출력하여 렌더링 여부를 확인합니다.
4. `export default memo(Todos);` : Todos 컴포넌트를 memo로 감싸서, todos prop이 변경되지 않는 한 컴포넌트를 다시 렌더링하지 않도록 합니다.

<br><br>

## 5-7. 구성요소 조합(Composition) 코드

**chap05_composition/src/App.js**

```jsx
import './App.css';
import MyComponent from './components/MyComponent';
import MyComponent2 from './components/MyComponent2';
import MyComponent3 from './components/MyComponent3';
import Football from './components/Football';
import Sales from './components/Sales';
import UsingAir from './components/UsingAir';
import Garage from './components/Garage';
import Boarding from './components/Boarding';
import Goal from './components/Goal';
import Passing from './components/Passing';
import Buy from './components/Buy';
import MyForm from './components/MyForm';

function App() {
  const user = {
    name: "John Doe",
    birthdate: "1990-01-01",
    age: 30
  };
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div className="App">
        <Garage />
        <UsingAir />
        <Sales />
        <myCom name="kim" />
        <myCom2 name="park" />
        <MyComponent name="John Doe" age={30} email="john@example.com" address="123 Main St" />
        <MyComponent2 name="John Doe" age={30} email="john@example.com" address="123 Main St" />
        <MyComponent3 user={user} />
        <Football />
        <Goal isGoal={false} />
        <Boarding cars={cars} />
        <Passing isPass={false} />
        <Buy />
        <MyForm />
    </div>
  );
}

export default App;
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react> cd chap05_composition
PS D:\gitRepository\sunglee0517\react\chap05_composition> npm start
```

<br><br><br>

# 6. React Hooks

## 6-1. Hook 란?

React 훅(Hooks)은 함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 API입니다. React 16.8 버전에서 도입된 훅은 클래스 컴포넌트에서만 가능했던 기능들을 함수형 컴포넌트에서도 사용할 수 있도록 해줍니다. 훅을 사용하면 코드가 더 간결하고 재사용 가능한 컴포넌트를 작성할 수 있습니다.

| 훅 이름       | 설명                                                                | 용도                                                        | 기본 문법                 |
|---------------|---------------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `useState`    | 컴포넌트의 상태를 관리합니다.                                       | 상태 값과 상태를 업데이트할 수 있는 함수를 제공합니다. | ```jsx<br>const [state, setState] = useState(initialState);<br>```                                                                                                                             |
| `useEffect`   | 컴포넌트의 사이드 이펙트를 관리합니다.                              | 컴포넌트가 렌더링된 후 실행할 코드나 클린업 작업을 설정합니다. | ```jsx<br>useEffect(() => {<br>  // Side effect code here<br>}, [dependencies]);<br>```                                                                                                           |
| `useContext`  | Context API를 사용하여 전역 상태를 관리합니다.                      | Context의 값을 사용하고 업데이트할 수 있는 훅입니다.       | ```jsx<br>const value = useContext(MyContext);<br>```                                                                                                                                           |
| `useRef`      | DOM 요소나 값을 유지할 수 있는 참조를 관리합니다.                   | DOM 요소에 접근하거나 렌더링 간에 값을 유지할 때 사용됩니다. | ```jsx<br>const ref = useRef(initialValue);<br>```                                                                                                                                              |
| `useCallback` | 메모이제이션된 콜백 함수를 반환합니다.                              | 자식 컴포넌트에 콜백 함수를 전달할 때 렌더링 최적화를 위해 사용됩니다. | ```jsx<br>const memoizedCallback = useCallback(() => {<br>  // Callback code here<br>}, [dependencies]);<br>```                                                                                 |
| `useMemo`     | 메모이제이션된 값을 반환합니다.                                    | 복잡한 계산 결과를 메모이제이션하여 렌더링 성능을 최적화합니다. | ```jsx<br>const memoizedValue = useMemo(() => computeExpensiveValue(value), [dependencies]);<br>```                                                                                            |
| `Custom Hooks`| 사용자 정의 훅을 생성합니다.                                      | 복잡한 상태 로직을 재사용 가능한 훅으로 추상화할 때 사용됩니다. | ```jsx<br>function useCustomHook(params) {<br>  // Hook logic here<br>  return [state, setState];<br>}<br>```                                                                                  |

<br>

### 6-1-1. 프로젝트 구조

```lua
chap06_hooks/
├── public/
├── src/
│   ├── components/
│   │   ├── UseStateExample.js
│   │   ├── UseEffectExample.js
│   │   ├── UseContextExample.js
│   │   ├── UseRefExample.js
│   │   ├── UseCallbackExample.js
│   │   ├── UseReducerExample.js
│   │   ├── UseMemoExample.js
│   │   ├── CustomHookExample.js
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

<br>

### 6-1-2. 프로젝트 생성

```bash
PS D:\gitRepository\sunglee0517\react> npx create-react-app chap06_hooks
```

<br><br>

## 6-2. useState

1. 함수형 컴포넌트에서 상태를 관리할 수 있게 해줍니다.
2. 컴포넌트 내에서 상태를 선언하고 업데이트할 수 있습니다.

**기본 문법**

```jsx
const [state, setState] = useState(initialState);
```

1. `state` : 현재 상태 값
2. `setState` : 상태를 업데이트하는 함수

<br>

**chap06_hooks/src/components/UseStateExample.js**

```jsx
// src/components/UseStateExample.js
import React, { useState } from 'react';

function UseStateExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>useState Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseStateExample;
```

1. `useState` 훅을 사용하여 `count` 상태를 관리합니다.
2. `setCount` 함수로 `count` 값을 업데이트하며, 버튼 클릭 시 `count`를 증가시킵니다.

<br><br>

## 6-3. useEffect

1. 컴포넌트가 렌더링된 후 사이드 이펙트를 처리할 수 있게 해줍니다.
2. 데이터 fetching, 구독 설정, DOM 수동 조작, 타이머 설정 등 다양한 부수 효과를 처리할 때 사용합니다.

**기본 문법**

```jsx
useEffect(() => {
  // 사이드 이펙트 코드
  return () => {
    // 클린업 코드
  };
}, [dependencies]); // 의존성 배열
```

<br>

**chap06_hooks/src/components/UseEffectExample.js**

```jsx
// src/components/UseEffectExample.js
import React, { useState, useEffect } from 'react';

function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted or updated');
        document.title = `Count: ${count}`;

        return () => {
            console.log('Cleanup on component unmount or before next update');
        };
    }, [count]); // Dependency array - effect runs when 'count' changes

    return (
        <div>
            <h2>useEffect Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffectExample;
```

1. `useEffect` 훅을 사용하여 `count` 상태가 변경될 때마다 `document.title` 을 업데이트합니다.
2. 컴포넌트가 언마운트되거나 `count` 가 변경되기 전에 정리(cleanup) 작업을 수행합니다.

<br><br>

## 6-4. useContext

1. Context API를 사용하여 전역 상태를 함수형 컴포넌트에서 쉽게 접근할 수 있게 해줍니다.
2. Context의 값을 읽거나 업데이트할 때 사용합니다.

**기본 문법**

```jsx
const value = useContext(MyContext);
```

<br>

**chap06_hooks/src/components/UseContextExample.js**

```jsx
// src/components/UseContextExample.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h2>useContext Example</h2>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

function UseContextExample() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default UseContextExample;
```

1. `createContext`로 `Context`를 생성하고, `useContext`로 이 `Context`를 사용합니다.
2. `ThemeProvider` 컴포넌트가 `theme`와 `toggleTheme`을 제공하며, `ThemedComponent`에서 이를 사용하여 현재 테마를 표시하고 변경합니다.

<br><br>

## 6-5. useRef

1. DOM 요소나 렌더링 간에 유지해야 하는 값을 참조할 수 있게 해줍니다.
2. DOM 접근, 상태 관리 또는 렌더링 간에 변하지 않는 값을 유지할 때 사용합니다.

**기본 문법**

```jsx
const ref = useRef(initialValue);
```

<br>

**chap06_hooks/src/components/UseRefExample.js**

```jsx
// src/components/UseRefExample.js
import React, { useRef } from 'react';

function UseRefExample() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>useRef Example</h2>
            <input ref={inputRef} type="text" placeholder="Click button to focus" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default UseRefExample;
```

1. `useRef` 훅을 사용하여 `inputRef`를 생성하고, 이를 `input` 요소에 연결합니다.
2. 버튼 클릭 시 `focusInput` 함수로 `input` 요소에 포커스를 설정합니다.

<br><br>

## 6-6. useReducer

1. Reducer란? 상태 관리가 복잡해질 경우 그 것을 정리하여 축약하는 것을 말합니다.
2. useReducer는 상태 관리의 복잡성을 다루기 위해 useState를 대체할 수 있는 훅입니다. 주로 상태 업데이트가 복잡하거나 상태 전환 로직이 여러 단계로 나뉘어 있는 경우에 유용합니다. 
3. useReducer는 리듀서 패턴을 사용하여 상태를 업데이트하며, 이 패턴은 Redux와 같은 상태 관리 라이브러리에서 사용되는 방식과 유사합니다.

<br>

**용도**

1. 상태가 복잡하거나 여러 액션에 따라 다르게 업데이트되어야 하는 경우
2. 상태 업데이트 로직이 복잡하고 여러 단계로 나뉘는 경우
3. 상태 업데이트 로직을 별도의 함수로 분리하여 가독성과 유지보수성을 높이고 싶은 경우


**기본 문법**

```jsx
import React, { useReducer } from 'react';

// 상태와 액션을 정의
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

1. `initialState` : 상태의 초기값을 설정합니다.
2. `reducer` : 상태와 액션을 받아 새로운 상태를 반환하는 함수입니다. 이 함수는 switch 문 등을 사용하여 다양한 액션에 따라 상태를 업데이트합니다.
3. `useReducer(reducer, initialState)` : 이 훅은 리듀서 함수와 초기 상태를 인자로 받아 현재 상태와 dispatch 함수를 반환합니다.
4. `dispatch(action)` : 상태를 업데이트하기 위한 액션을 전달하는 함수입니다. 액션 객체는 type 속성을 가지고 있어야 하며, 추가적인 데이터는 payload 등의 속성으로 전달할 수 있습니다.

<br>

**장점**

1. 복잡한 상태 로직 처리: 여러 상태 업데이트 로직을 한 곳에서 처리할 수 있습니다.
2. 예측 가능한 상태 업데이트: 리듀서 함수가 상태 업데이트를 처리하기 때문에 상태 변화가 예측 가능합니다.
3. 확장성: 상태와 액션을 별도의 함수로 분리하여 관리하므로 상태 로직을 쉽게 확장할 수 있습니다.

**사용 시 유의사항**

1. useReducer는 상태 업데이트 로직이 복잡한 경우에 주로 사용됩니다. 상태가 간단한 경우에는 useState가 더 적합할 수 있습니다.
2. 리듀서 함수는 순수 함수여야 하며, 사이드 이펙트를 포함하면 안 됩니다.
3. useReducer는 useState보다 상태 관리의 복잡도를 줄이고, 보다 구조적이고 명확한 상태 관리가 필요한 경우에 적합합니다.

<br>

**chap06_hooks/src/components/UseReducerExample.js**

```jsx
import React, { useReducer } from 'react';

// 초기 상태 정의
const initialState = { count: 0 };

// 리듀서 함수 정의
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

function UseReducerExample() {
  // useReducer 훅을 사용하여 상태와 디스패치 함수 가져오기
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default UseReducerExample;
```

1. **초기 상태 정의 (initialState)**: count라는 속성을 가지며 초기값은 0으로 설정됩니다.
2. **리듀서 함수 (reducer)**
  state와 action을 인자로 받아 새로운 상태를 반환합니다.
  increment, decrement, reset 등의 액션 타입에 따라 상태를 업데이트합니다.
3. **useReducer 훅 사용**: reducer와 initialState를 인자로 전달하여 현재 상태(state)와 상태를 업데이트하는 dispatch 함수를 가져옵니다.
4. **컴포넌트 반환** 
  상태(state.count)를 화면에 표시합니다.
  버튼 클릭 시 각기 다른 액션을 dispatch하여 상태를 변경합니다.

<br><br>

## 6-7. useCallback

1. 메모이제이션된 콜백 함수를 반환하여 불필요한 함수 재생성을 방지합니다.
2. 콜백 함수를 자식 컴포넌트에 전달할 때 렌더링 최적화를 도와줍니다.

**기본 문법**

```jsx
const memoizedCallback = useCallback(() => {
  // 콜백 함수 코드
}, [dependencies]);
```

<br>

**chap06_hooks/src/components/UseCallbackExample.js**

```jsx
// src/components/UseCallbackExample.js
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onButtonClick }) => {
    console.log('Child rendered');
    return <button onClick={onButtonClick}>Click me</button>;
});

function UseCallbackExample() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        alert('Button clicked');
    }, []); // Empty dependency array means this function will not change

    return (
        <div>
            <h2>useCallback Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <Child onButtonClick={handleClick} />
        </div>
    );
}

export default UseCallbackExample;
```

1. `useCallback` 훅을 사용하여 `handleClick` 함수를 메모이제이션합니다.
2. `Child` 컴포넌트는 `React.memo`로 감싸져 있어, `handleClick` 함수가 변경되지 않는 한 리렌더링되지 않습니다.

<br><br>

## 6-8. useMemo

1. 메모이제이션된 값을 반환하여 복잡한 계산 결과를 재사용할 수 있게 해줍니다.
2. 계산이 비싼 값의 결과를 메모이제이션하여 렌더링 성능을 최적화합니다.

**기본 문법**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(value), [dependencies]);
```

<br>

**chap06_hooks/src/components/UseMemoExample.js**

```jsx
// src/components/UseMemoExample.js
import React, { useState, useMemo } from 'react';

function computeExpensiveValue(num) {
    console.log('Computing expensive value');
    return num * 2;
}

function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(1);

    const expensiveValue = useMemo(() => computeExpensiveValue(num), [num]);

    return (
        <div>
            <h2>useMemo Example</h2>
            <p>Expensive Value: {expensiveValue}</p>
            <button onClick={() => setNum(num + 1)}>Increment Number</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default UseMemoExample;
```

1. `useMemo` 훅을 사용하여 `computeExpensiveValue`의 결과를 메모이제이션합니다.
2. `num`이 변경될 때만 `computeExpensiveValue`가 호출되며, `count`는 영향을 주지 않습니다.

<br><br>

## 6-9. Custom Hooks

1. 훅을 조합하여 재사용 가능한 로직을 만들 수 있게 해줍니다.
2. 상태 관리, 부수 효과 처리 등 복잡한 로직을 재사용 가능한 훅으로 추상화합니다.

**기본 문법**

```jsx
function useCustomHook(params) {
  // 훅 로직
  return [state, setState];
}
```

<br>

**chap06_hooks/src/components/CustomHookExample.js**

```jsx
// src/components/CustomHookExample.js
import React, { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

function CustomHookExample() {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <div>
            <h2>Custom Hook Example</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Your name is: {name}</p>
        </div>
    );
}

export default CustomHookExample;
```

1. `useLocalStorage` 라는 사용자 정의 훅을 사용하여 로컬 스토리지에 값을 저장하고 불러옵니다.
2. `CustomHookExample` 컴포넌트에서 이 훅을 사용하여 로컬 스토리지와 상태를 관리합니다.

<br><br>

## 6-10. hook 의 사용 전체 코드

**chap06_hooks/src/App.js**

```jsx
// src/App.js
import React from 'react';
import UseStateExample from './components/UseStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseContextExample from './components/UseContextExample';
import UseRefExample from './components/UseRefExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import CustomHookExample from './components/CustomHookExample';

function App() {
    return (
        <div>
            <h1>React Hooks Examples</h1>
            <UseStateExample />
            <UseEffectExample />
            <UseContextExample />
            <UseRefExample />
            <UseCallbackExample />
            <UseMemoExample />
            <CustomHookExample />
        </div>
    );
}

export default App;
```

<br>

**chap06_hooks/src/index.js**

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react> cd chap06_hooks
PS D:\gitRepository\sunglee0517\react\chap06_hooks> npm start
```


<br><br><br>

# 7. React Router

## 7-1. 리액트 라우터의 개념

리액트 라우터는 리액트 애플리케이션에서 페이지 네비게이션을 관리하는 라이브러리입니다. 주로 두 가지 주요 패키지가 사용됩니다.

react-router-dom: 웹 애플리케이션을 위한 라우터 라이브러리
react-router-native: 리액트 네이티브 애플리케이션을 위한 라우터 라이브러리

<br>

**리액트 라우터의 용도**

1. URL에 따라 다른 컴포넌트를 렌더링
2. URL 파라미터를 통해 동적인 경로 처리
3. 중첩된 라우팅을 통해 복잡한 네비게이션 구현
4. 레이지 로딩을 통해 컴포넌트를 필요할 때만 로드

<br>

**프로젝트 생성**

```bash
md chap07_router
cd chap07_router
npx create-react-app chap07_router
```

<br><br>

## 7-2. 라우터 설정

### 7-2-1. 패키지 설치

```bash
npx create-react-app chapter_router
cd chap07_router
npm install react-router-dom
```

<br><br>

### 7-2-2. 기본 설정

라우터를 설정하려면 BrowserRouter 컴포넌트를 사용하여 애플리케이션의 루트를 감쌉니다. 라우팅 설정은 Routes와 Route 컴포넌트를 사용하여 구현합니다.

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

export default App;
```

<br><br>

## 7-3. 속성 전달

### 7-3-1. 속성 전달

라우터를 통해 컴포넌트에 속성을 전달할 수 있습니다. element 속성에 JSX를 사용하여 컴포넌트를 렌더링할 때, 해당 컴포넌트에 속성을 전달할 수 있습니다.

```jsx
<Route path="/user/:userId" element={<User />} />
```

컴포넌트 내부에서 useParams 훅을 사용하여 URL 파라미터를 읽을 수 있습니다.

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}
```

<br><br>

## 7-4. URI 파라미터 적용

URI 파라미터는 URL의 일부로 동적 데이터를 전달하는 방법입니다. URL 경로에서 :parameterName 형태로 설정하여 파라미터를 정의합니다.

```jsx
<Route path="/user/:userId" element={<User />} />
```

컴포넌트에서는 useParams 훅을 사용하여 파라미터 값을 읽습니다.

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}
```

<br><br>

## 7-5. 중첩 라우팅

중첩 라우팅을 사용하면 부모 라우트 안에 자식 라우트를 정의하여 하위 경로를 구현할 수 있습니다. Outlet 컴포넌트를 사용하여 중첩된 라우트를 렌더링합니다.

```jsx
import { Outlet } from 'react-router-dom';

function User() {
  return (
    <div>
      <h1>User Page</h1>
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

function UserProfile() {
  return <h2>User Profile</h2>;
}

<Route path="/user" element={<User />}>
  <Route path="profile" element={<UserProfile />} />
</Route>
```

<br><br>

## 7-6. 라우터 훅(Router Hook)

리액트 라우터는 다양한 훅을 제공합니다. 주요 훅은 다음과 같습니다:

1. useNavigate(): 프로그래밍적으로 경로를 변경합니다.
2. useParams(): 현재 경로의 URL 파라미터를 읽습니다.
3. useLocation(): 현재 위치 객체를 반환합니다.
4. useMatch(): 현재 URL이 특정 경로와 일치하는지 확인합니다.

```jsx
import { useNavigate, useParams, useLocation, useMatch } from 'react-router-dom';

function Example() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const match = useMatch("/path/:id");

  return (
    <div>
      <button onClick={() => navigate('/new-path')}>Go to New Path</button>
      <p>ID: {id}</p>
      <p>Location: {location.pathname}</p>
      <p>Match: {match ? 'Matched' : 'Not Matched'}</p>
    </div>
  );
}
```

<br><br>

## 7-7. 라우터 컴포넌트(Router Component)

리액트 라우터에서 사용하는 주요 컴포넌트는 다음과 같습니다:

1. BrowserRouter: HTML5 history API를 사용하여 클라이언트 사이드 라우팅을 구현합니다.
2. Routes: 라우트의 목록을 정의합니다.
3. Route: 특정 경로와 컴포넌트를 매핑합니다.
4. Link: 페이지 간의 링크를 생성합니다.
5. Outlet: 중첩된 라우트를 렌더링합니다.

<br><br>

## 7-8. 레이지 로딩(Lazy Loading)

레이지 로딩은 컴포넌트를 필요할 때만 로드하여 초기 로딩 속도를 개선하는 방법입니다. React.lazy()와 Suspense를 사용하여 구현합니다.

```jsx
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

위 코드는 LazyComponent를 필요할 때만 로드하며, 로딩 중에는 "Loading..." 텍스트를 표시합니다.

<br><br>

## 7-9. 라우터 실습 

### 7-9-1. App 컴포넌트에서 한 꺼번에 라우팅하기

**프로젝트 생성**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router> npx create-react-app chap07_onecomponent
```

<br>

**라우터 설치**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router> cd chap07_onecomponent
PS D:\gitRepository\sunglee0517\react\chap07_router\chap07_onecomponent> npm install react-router-dom
```

<br>

**프로젝트 구조**

```lua
chap07_onecomponent/
├── public/
├── src/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

<br>

**src/App.js**

```jsx
import './App.css';
import {BrowserRouter , Route, Routes , Link} from "react-router-dom"

//컴포넌트 (페이지)
function Home(){
  return(
    <div>
        <h3>Home Page</h3>
        <p>Welcome to HomePage</p>
    </div>
  )
}
//컴포넌트 (페이지)
function About(){
  return(
    <div>
        <h3>About Page</h3>
        <p>Welcome to AboutPage</p>
    </div>
  )
}

//컴포넌트 (페이지)
function Contact(){
  return(
    <div>
        <h3>Contact Page</h3>
        <p>Welcome to ContactPage</p>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* JSX {} 안에 주석 : 라우팅 설정하기 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router\chap07_onecomponent> npm start
```

<br><br>

### 7-9-2. 여러 컴포넌트를 활용해 라우팅하기

**프로젝트 생성**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router> npx create-react-app chap07_multicomponent
```

<br>

**라우터 설치**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router> cd chap07_multicomponent
PS D:\gitRepository\sunglee0517\react\chap07_router\chap07_multicomponent> npm install react-router-dom
```

<br>

**프로젝트 구조**

```lua
chap07_multicomponent/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── User.js
│   │   └── Users.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

<br>

**src/components/Home.js**

```jsx
import React from 'react';

const Home = (props) => {
    return (
        <div> 
            <h3>HomPage</h3>
            <p>Welcome to react World</p>
        </div>
    );
};

export default Home;
```

<br>

**src/components/Users.js**

```jsx
import React from 'react';
import {Link} from 'react-router-dom'

const Users = () => {

    //데이터
    const users = [
        { id: 1, name: '김' },
        { id: 2, name: '이' },
        { id: 3, name: '박' }
      ];


    return (
        <div>
             <h1>사용자 목록</h1>
             {/* 
                반복구문  map (조회) , filter(삭제)
             */}
             {
                users.map(user=> (
                      <li key={user.id}>
                          <Link to={`/user/${user.id}`}>{user.name}</Link>
                      </li>  
                ))
             }    
        </div>
    );
};

export default Users;
```

<br>

**src/components/User.js**

```jsx
import React from 'react';
import {useParams} from 'react-router-dom'

const User = () => {

    //user/:id  
    //URL 에서 동적으로 파라메터 가져오기
    //MPA  :   localhost:8090/user/1     > spring   @pathvariable()
    
    const {userId} = useParams();

    const users={
        1:{id:1 , name:"김" ,email:"kim@naver.com"},
        2:{id:2 , name:"이" ,email:"lee@naver.com"},
        3:{id:3 , name:"박" ,email:"park@naver.com"}
    }

    const user = users[userId];
    //ex) user = users[1];


    return (
        <div> 
                <h3>user information</h3>
                {
                    user ? (   // user ? () : ()
                                <div>
                                    <h3>{user.name}</h3>
                                    <p>ID:{user.id}</p>
                                    <p>Email : {user.email}</p>
                                </div>
                            ) : 
                            ( 
                               <p>User not found</p>          
                            )
                }    
        </div>
    );
};

export default User;
```

<br>

**src/App.js**

```jsx
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/user/:userId' element={<User/>} />
            {/*  localhost:3000/user/1 ,    localhost:3000/user/2  동적 라우팅  */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router\chap07_multicomponent> npm start
```

<br><br>

### 7-9-3. 라우팅 종합 실습

**프로젝트 구조**

```lua
chap07_router/
├── public/
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── User.js
│   │   ├── UserProfile.js
│   │   ├── NotFound.js
│   │   └── LazyComponent.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

<br>

**프로젝트 생성 및 라우터 패키지 설치**

```bash
PS D:\gitRepository\sunglee0517\react> cd chap07_router
PS D:\gitRepository\sunglee0517\react\chap07_router> npx create-react-app chap07_router
PS D:\gitRepository\sunglee0517\react\chap07_router> cd chap07_router
PS D:\gitRepository\sunglee0517\react\chap07_router\chap07_router> npm install react-router-dom
```

<br>

**src/components/Home.js**

```jsx
import React from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

<br>

**src/components/About.js**

```jsx
import React from 'react';

function About() {
  return <h1>About Page</h1>;
}

export default About;
```

<br>

**src/components/User.js**

```jsx
import React from 'react';
import { useParams, Outlet } from 'react-router-dom';

function User() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Page: {userId}</h1>
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
}

export default User;
```

<br>

**src/components/UserProfile.js**

```jsx
import React from 'react';

function UserProfile() {
  return <h2>User Profile</h2>;
}

export default UserProfile;
```

<br>

**src/components/NotFound.js**

```jsx
import React from 'react';

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

export default NotFound;
```

<br>

**src/components/LazyComponent.js**

```jsx
import React from 'react';

function LazyComponent() {
  return <h1>Lazy Loaded Component</h1>;
}

export default LazyComponent;
```

<br>

**src/components/App.js**

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import NotFound from './NotFound';

// Lazy loading components
const LazyComponent = lazy(() => import('./LazyComponent'));
const UserProfile = lazy(() => import('./UserProfile'));

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/lazy">Lazy Loaded Component</Link></li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<User />}>
          <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/lazy" element={<LazyComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
```

<br>

**프로젝트 실행**

```bash
PS D:\gitRepository\sunglee0517\react\chap07_router\chap07_router>npm start
```

<br><br><br>

# 8. HTTP 비동기 통신

## 8-1. Fetch 문법 및 사용

### 8-1-1. Fetch 문법

리액트에서 fetch API는 HTTP 요청을 보내고 응답을 처리하는 데 사용되는 기본적인 방법 중 하나입니다. 이는 자바스크립트의 window 객체에 내장되어 있으며, 웹 브라우저에서 기본적으로 제공하는 네트워크 요청 라이브러리입니다.

<br>

**기본 개념**

fetch는 웹 브라우저에서 HTTP 요청을 보내고 응답을 받는 데 사용되는 API입니다. 이 API는 Promise 기반으로 동작하여 비동기 작업을 쉽게 처리할 수 있습니다. fetch는 RESTful API와 통신하거나 서버와의 데이터 전송을 위해 자주 사용됩니다.

<br>

**특징**

Promise 기반: fetch는 Promise를 반환하여 비동기적으로 데이터를 처리합니다. 이는 코드의 가독성을 높이고 비동기 작업을 더 쉽게 다룰 수 있게 합니다.

1. 기본 지원: fetch는 최신 웹 브라우저에서 기본적으로 지원됩니다. 별도의 라이브러리 설치 없이 사용 가능합니다.
2. 간결한 문법: 간단한 문법을 통해 HTTP 요청을 쉽게 보낼 수 있습니다.
3. 응답 처리: 응답은 `Response` 객체로 제공되며, 이 객체는 `json()`, `text()`, `blob()` 등의 메서드를 통해 응답 본문을 다양한 형식으로 처리할 수 있습니다.
4. 에러 처리: HTTP 상태 코드가 200 범위에 있지 않을 때는 `Promise`가 `rejected`되지 않습니다. 응답의 ok 속성이나 status 속성을 사용하여 상태를 확인하고 처리해야 합니다.

<br>

**기본 문법**

```javascript
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // 또는 response.text() 등
  })
  .then(data => {
    console.log(data); // 데이터를 처리
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
```

1. url: 요청할 URL
2. options: 요청 옵션(선택사항)
  요청 옵션 : fetch의 두 번째 인자는 요청의 설정을 포함하는 옵션 객체입니다. 주요 옵션은 다음과 같습니다:
3. method: HTTP 메서드(GET, POST, PUT, DELETE 등)
4. headers: 요청 헤더
5. body: 요청 본문 (POST나 PUT 요청에 사용)

<br>

**GET 요청 방식**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<br>

**POST 요청**

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<br>

**PUT 요청**

```javascript
fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'newValue' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<br>

**DELETE 요청**

```javascript
fetch('https://api.example.com/data/1', {
  method: 'DELETE'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // DELETE 요청은 보통 응답 본문이 없으므로 text() 사용
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

<br>

**지원하는 전송 방식**

fetch는 다음과 같은 전송 방식을 지원합니다:

1. GET: 데이터를 서버로부터 가져올 때 사용
2. POST: 서버에 데이터를 추가하거나 제출할 때 사용
3. PUT: 서버의 데이터를 수정할 때 사용
4. DELETE: 서버의 데이터를 삭제할 때 사용

이 외에도 HEAD, OPTIONS, PATCH 등의 HTTP 메서드를 지원합니다.

<br><br>

### 8-1-2. 프로젝트 생성

**프로젝트 생성**

```bash
npx create-react-app chap08_fetch
```

<br>

**프로젝트 구조**

```lua
chap08_fetch
├── src
│   ├── components
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   │   ├── BoardList.js
│   │   └── Home.js
│   ├── App.js
│   └── index.js
└── package.json
```

<br>

**패키지 설치**

라우팅을 위해 react-router-dom을 설치합니다.

```bash
npm install react-router-dom
```

<br><br>

### 8-1-3. App.js 설정

App.js는 라우터 설정을 담당합니다.

```jsx
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/insert" element={<BoardInsert />} />
        <Route path="/boards/detail/:no" element={<BoardDetail />} />
        <Route path="/boards/edit/:no" element={<BoardEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
```

<br><br>

### 8-1-4. index.js 설정

index.js는 애플리케이션의 엔트리 포인트입니다.

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

<br><br>

### 8-1-5. 컴포넌트 구현

각 컴포넌트는 아래와 같이 구현할 수 있습니다.

**Home.js**

홈 페이지를 간단하게 구현합니다.

```jsx
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/boards">View Boards</Link>
        <Link to="/boards/insert">Add New Board</Link>
      </nav>
    </div>
  );
}

export default Home;
```

<br>

**BoardList.js**

게시판 목록을 가져와서 표시합니다.

```jsx
// src/components/BoardList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/company/boards/list')
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error fetching boards:', error));
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map(board => (
          <li key={board.no}>
            <Link to={`/boards/detail/${board.no}`}>{board.title}</Link>
            <Link to={`/boards/edit/${board.no}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
```

<br>

**BoardInsert.js**

새 게시글을 추가합니다.

```jsx
// src/components/BoardInsert.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BoardInsert() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8085/company/boards/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, author }),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/boards');
      })
      .catch(error => console.error('Error inserting board:', error));
  };

  return (
    <div>
      <h1>Insert New Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Board</button>
      </form>
    </div>
  );
}

export default BoardInsert;
```

<br>

**BoardDetail.js**

게시글의 상세 정보를 표시합니다.

```jsx
// src/components/BoardDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BoardDetail() {
  const { no } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => setBoard(data))
      .catch(error => console.error('Error fetching board detail:', error));
  }, [no]);

  if (!board) return <p>Loading...</p>;

  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Posted on:</strong> {new Date(board.resdate).toLocaleDateString()}</p>
      <Link to={`/boards/edit/${board.no}`}>Edit</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

**BoardEdit.js**

게시글을 수정합니다.

```jsx
// src/components/BoardEdit.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BoardEdit() {
  const { no } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error fetching board detail for edit:', error));
  }, [no]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8085/company/boards/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ no, title, content, author }),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/boards');
      })
      .catch(error => console.error('Error updating board:', error));
  };

  return (
    <div>
      <h1>Edit Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Board</button>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br><br>

## 8-2. Promise 문법 및 사용

### 8-2-1. Promise 의 문법

리액트에서의 Promise는 비동기 작업을 처리하는 데 널리 사용됩니다. Promise는 JavaScript의 핵심 기능 중 하나로, 비동기 연산의 결과를 나타내는 객체입니다. 리액트 애플리케이션에서 데이터를 비동기적으로 가져오거나 서버와 통신할 때 Promise를 사용합니다.

<br>

**기본 개념**

1. Promise는 비동기 작업의 완료 또는 실패를 나타내는 객체입니다.
2. 비동기 작업이 완료되면, Promise는 결과를 가진 상태(resolved) 또는 오류를 가진 상태(rejected)로 전환됩니다.

<br>

**상태** : Promise는 세 가지 상태를 가집니다:

1. Pending: 초기 상태, 아직 완료되지 않았습니다.
2. Fulfilled: 비동기 작업이 성공적으로 완료되었습니다.
3. Rejected: 비동기 작업이 실패했습니다.

**체이닝** : `Promise`는 `.then()`과 `.catch()` 메서드를 사용하여 후속 작업을 정의할 수 있습니다. `.then()`은 `Promise`가 완료되었을 때 실행되는 콜백을, `.catch()`는 실패했을 때 실행되는 콜백을 지정합니다.

**비동기 작업** : Promise는 비동기 작업의 결과를 기다리면서 코드의 흐름을 제어할 수 있습니다. 이로 인해 비동기 작업이 완료될 때까지 다른 작업을 진행할 수 있습니다.

<br>

**사용 문법**

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = true; // or false based on operation
    if (success) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed.');
    }
  }, 1000);
});

// Using the Promise
myPromise
  .then(result => {
    console.log(result); // 'Operation successful!'
  })
  .catch(error => {
    console.error(error); // 'Operation failed.'
  });
```

**지원하는 전송방식**

Promise는 전송 방식에 직접적인 영향을 미치지 않지만, HTTP 요청을 비동기적으로 처리할 때 fetch와 같은 API를 사용하여 Promise를 활용할 수 있습니다. fetch는 비동기 HTTP 요청을 처리하며, Promise를 반환하여 응답을 기다릴 수 있게 해줍니다.

<br>

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Process the data
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

<br>

**주요 특징 요약**

1. 비동기 작업: Promise는 비동기 작업의 완료 또는 실패를 나타냅니다.
2. 체이닝: .then()과 .catch()를 통해 비동기 작업의 결과를 처리합니다.
3. 동기화: 비동기 작업을 동기적으로 처리할 수 있게 해줍니다.
4. 에러 핸들링: Promise의 .catch()를 사용하여 에러를 처리할 수 있습니다.

리액트 애플리케이션에서 Promise를 활용하면 비동기 데이터 가져오기, 서버와의 통신, 사용자 입력 처리 등 다양한 비동기 작업을 효율적으로 처리할 수 있습니다. Promise의 비동기적 성격 덕분에 애플리케이션의 사용자 경험을 원활하게 유지할 수 있습니다

<br><br>

### 8-2-2. 프로젝트 생성

**프로젝트 구조**

```lua
chap08_promise/
├── src
│   ├── components
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   │   ├── BoardList.js
│   │   └── Home.js
│   ├── App.js
│   └── index.js
└── package.json
```

<br>

1. Home.js: 기본 홈 페이지 컴포넌트로 다른 페이지로의 링크를 포함합니다.
2. BoardList.js: 게시판 목록을 표시하는 컴포넌트입니다. useEffect 훅을 사용하여 데이터를 비동기적으로 가져옵니다.
3. BoardInsert.js: 새로운 게시글을 추가하는 폼을 제공합니다. useState 훅을 사용하여 폼 상태를 관리하고, useNavigate 훅을 사용하여 페이지를 리다이렉션합니다.
4. BoardDetail.js: 특정 게시글의 세부 정보를 표시합니다. 삭제 버튼도 포함되어 있습니다.
5. BoardEdit.js: 게시글을 수정할 수 있는 폼을 제공합니다. useEffect 훅을 사용하여 기존 게시글의 데이터를 가져와서 편집할 수 있게 합니다.
5. App.js: react-router-dom을 사용하여 라우팅을 설정합니다.
6. index.js: 애플리케이션을 DOM에 렌더링합니다.

<br>

**패키지 설치**

```bash
npx create-react-app chap08_promise
cd chap08_promise
npm install react-router-dom
```

<br><br>

### 8-2-3. 컴포넌트 코드

**Home.js**

```javascript
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/board-list">Board List</Link></li>
          <li><Link to="/board-insert">Add New Board</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
```

<br>

**BoardList.js**

```javascript
// src/components/BoardList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/company/boards/list')
      .then(response => response.json())
      .then(data => setBoards(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map(board => (
          <li key={board.no}>
            <Link to={`/board-detail/${board.no}`}>{board.title}</Link>
            <Link to={`/board-edit/${board.no}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList
```

<br>

**BoardInsert.js**

```javascript
// src/components/BoardInsert.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardInsert = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBoard = { title, content, author };

    fetch('http://localhost:8085/company/boards/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBoard),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/board-list');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Add New Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BoardInsert;
```

<br>

**BoardDetail.js**

```javascript
// src/components/BoardDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BoardDetail = () => {
  const { no } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => setBoard(data))
      .catch(error => console.error('Error:', error));
  }, [no]);

  if (!board) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Board Detail</h1>
      <p><strong>Title:</strong> {board.title}</p>
      <p><strong>Content:</strong> {board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Posted on:</strong> {new Date(board.resdate).toLocaleDateString()}</p>
      <Link to={`/board-edit/${board.no}`}>Edit</Link>
      <button onClick={() => handleDelete(board.no)}>Delete</button>
      <br />
      <Link to="/board-list">Back to List</Link>
    </div>
  );
  
  function handleDelete(no) {
    fetch(`http://localhost:8085/company/boards/delete?no=${no}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        console.log('Board deleted');
        window.location.href = '/board-list';
      })
      .catch(error => console.error('Error:', error));
  }
};

export default BoardDetail;
```

<br>

**BoardEdit.js**

```javascript
// src/components/BoardEdit.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BoardEdit = () => {
  const { no } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error('Error:', error));
  }, [no]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBoard = { no, title, content, author };

    fetch('http://localhost:8085/company/boards/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBoard),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate(`/board-detail/${no}`);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Edit Board</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BoardEdit;
```

<br>

**App.js**

```javascript
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board-list" element={<BoardList />} />
        <Route path="/board-insert" element={<BoardInsert />} />
        <Route path="/board-detail/:no" element={<BoardDetail />} />
        <Route path="/board-edit/:no" element={<BoardEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
```

<br>

**index.js**

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

<br><br><br>

## 8-3. Ajax 문법 및 사용

### 8-3-1. Ajax 문법

리액트에서 jQuery의 ajax를 사용하는 경우, jQuery는 브라우저와 서버 간의 비동기 통신을 처리하는 데 유용한 도구입니다. jQuery의 ajax 메서드는 HTTP 요청을 보내고 응답을 받을 수 있도록 도와주며, 리액트의 컴포넌트에서 비동기 데이터를 처리할 때 사용할 수 있습니다. 하지만 리액트에서는 fetch 또는 axios와 같은 더 현대적인 라이브러리도 자주 사용되며, 이들 라이브러리가 ajax보다 더 직관적이고 강력한 기능을 제공할 수 있습니다. 그럼에도 불구하고 jQuery의 ajax는 여전히 많이 사용하고 있습니다.

<br>

**기본 개념**

jQuery의 ajax 메서드는 비동기 HTTP 요청을 처리하는 방법을 제공합니다. 이를 통해 클라이언트와 서버 간의 데이터 통신을 수행할 수 있습니다. ajax는 jQuery 라이브러리의 일부로, 브라우저와 서버 간의 비동기 요청을 쉽게 관리할 수 있도록 돕습니다.

<br>

**특징**

1. 비동기 요청: 서버로 요청을 보내면서 페이지의 다른 부분이 계속 작동할 수 있도록 비동기적으로 데이터를 전송합니다.
2. 다양한 전송 방식 지원: GET, POST, PUT, DELETE 등 다양한 HTTP 요청 방식을 지원합니다.
3. 콜백 기반: 요청이 성공하거나 실패했을 때 호출될 콜백 함수를 설정할 수 있습니다.
4. 응답 데이터 처리: 서버로부터 받은 응답 데이터를 쉽게 처리할 수 있습니다.
5. 크로스 브라우저 지원: jQuery는 다양한 브라우저에서 일관된 동작을 보장합니다.

<br>

**사용 문법**

jQuery의 ajax 메서드는 여러 가지 옵션을 제공하며, 이 옵션들을 통해 요청을 세부적으로 구성할 수 있습니다.

```javascript
$.ajax({
  url: 'http://example.com/api',      // 요청 URL
  type: 'GET',                        // 요청 방식: GET, POST, PUT, DELETE 등
  data: {},                           // 서버로 전송할 데이터 (GET 요청 시 URL 쿼리 문자열로 포함됨)
  dataType: 'json',                   // 서버로부터의 응답 데이터 형식
  success: function(response) {       // 요청이 성공했을 때 호출되는 함수
    console.log('Success:', response);
  },
  error: function(jqXHR, textStatus, errorThrown) {  // 요청이 실패했을 때 호출되는 함수
    console.error('Error:', textStatus, errorThrown);
  }
});
```

<br>

**지원하는 전송 방식**

GET: 서버에서 데이터를 조회할 때 사용합니다. 주로 데이터 요청에 사용됩니다.
POST: 서버에 데이터를 전송하여 새로운 리소스를 생성하거나 기존 리소스를 업데이트할 때 사용합니다.
PUT: 서버의 기존 리소스를 업데이트할 때 사용합니다.
DELETE: 서버에서 특정 리소스를 삭제할 때 사용합니다.

<br>

**GET 요청**

```javascript
$.ajax({
  url: 'URL',
  type: 'GET',
  dataType: 'json', // 응답 데이터 타입
  success: function(data) {
    // 성공적으로 데이터를 가져온 후 실행할 코드
  },
  error: function(jqXHR, textStatus, errorThrown) {
    // 요청이 실패했을 때 실행할 코드
  }
});
```

<br>

**POST 요청**

```javascript
$.ajax({
  url: 'URL',
  type: 'POST',
  contentType: 'application/json', // 요청 본문 데이터 타입
  data: JSON.stringify({ key: 'value' }), // 전송할 데이터
  success: function(data) {
    // 성공적으로 데이터를 전송한 후 실행할 코드
  },
  error: function(jqXHR, textStatus, errorThrown) {
    // 요청이 실패했을 때 실행할 코드
  }
});
```

<br>

**PUT 요청**

```javascript
$.ajax({
  url: 'URL',
  type: 'PUT',
  contentType: 'application/json',
  data: JSON.stringify({ key: 'value' }), // 전송할 데이터
  success: function(data) {
    // 성공적으로 데이터를 전송한 후 실행할 코드
  },
  error: function(jqXHR, textStatus, errorThrown) {
    // 요청이 실패했을 때 실행할 코드
  }
});
```

<br>

**DELETE 요청**

```javascript
$.ajax({
  url: 'URL',
  type: 'DELETE',
  contentType: 'application/json',
  data: JSON.stringify({ key: 'value' }), // 전송할 데이터 (선택적)
  success: function(data) {
    // 성공적으로 데이터를 삭제한 후 실행할 코드
  },
  error: function(jqXHR, textStatus, errorThrown) {
    // 요청이 실패했을 때 실행할 코드
  }
});
```

<br><br>

### 8-3-2. 프로젝트 생성

**프로젝트 생성 및 패키지 설치**

```bash
npx create-react-app chap08_ajax
cd chap08_ajax
npm install jquery react-router-dom
```

<br>

**프로젝트 구조**

```lua
chap08_ajax/
├── src
│   ├── components
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   │   ├── BoardList.js
│   │   └── Home.js
│   ├── App.js
│   └── index.js
└── package.json
```

<br><br>

### 8-3-3. 컴포넌트 파일 코드

**Home.js**

```javascript
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/boards">Board List</Link></li>
          <li><Link to="/boards/insert">Add Board</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
```

<br>

**BoardList.js**

```javascript
// src/components/BoardList.js
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    $.ajax({
      url: 'http://localhost:8085/company/boards/list',
      type: 'GET',
      success: (data) => {
        setBoards(data);
      },
      error: (err) => {
        console.error('Error fetching board list', err);
      },
    });
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map((board) => (
          <li key={board.no}>
            <Link to={`/boards/detail/${board.no}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
```

<br>

**BoardInsert.js**

```javascript
// src/components/BoardInsert.js
import React, { useState } from 'react';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

function BoardInsert() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:8085/company/boards/insert',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ title, content, author }),
      success: () => {
        alert('Board added successfully');
        navigate('/boards');
      },
      error: (err) => {
        console.error('Error inserting board', err);
      },
    });
  };

  return (
    <div>
      <h1>Add Board</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Add Board</button>
      </form>
    </div>
  );
}

export default BoardInsert;
```

<br>

**BoardDetail.js**

```javascript
// src/components/BoardDetail.js
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { useParams, Link } from 'react-router-dom';

function BoardDetail() {
  const [board, setBoard] = useState(null);
  const { no } = useParams();

  useEffect(() => {
    $.ajax({
      url: `http://localhost:8085/company/boards/detail?no=${no}`,
      type: 'GET',
      success: (data) => {
        setBoard(data);
      },
      error: (err) => {
        console.error('Error fetching board detail', err);
      },
    });
  }, [no]);

  const handleDelete = () => {
    $.ajax({
      url: `http://localhost:8085/company/boards/delete`,
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify({ no }),
      success: () => {
        alert('Board deleted successfully');
        window.location.href = '/boards';
      },
      error: (err) => {
        console.error('Error deleting board', err);
      },
    });
  };

  if (!board) return <div>Loading...</div>;

  return (
    <div>
      <h1>Board Detail</h1>
      <p>Title: {board.title}</p>
      <p>Content: {board.content}</p>
      <p>Author: {board.author}</p>
      <p>Resdate: {board.resdate}</p>
      <button onClick={handleDelete}>Delete Board</button>
      <Link to={`/boards/edit/${board.no}`}>Edit Board</Link>
      <Link to="/boards">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

**BoardEdit.js**

```javascript
// src/components/BoardEdit.js
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { useParams, useNavigate } from 'react-router-dom';

function BoardEdit() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    $.ajax({
      url: `http://localhost:8085/company/boards/detail?no=${no}`,
      type: 'GET',
      success: (data) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      },
      error: (err) => {
        console.error('Error fetching board details', err);
      },
    });
  }, [no]);

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:8085/company/boards/update',
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({ no, title, content, author }),
      success: () => {
        alert('Board updated successfully');
        navigate(`/boards/detail/${no}`);
      },
      error: (err) => {
        console.error('Error updating board', err);
      },
    });
  };

  return (
    <div>
      <h1>Edit Board</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Update Board</button>
      </form>
      <Link to={`/boards/detail/${no}`}>Back to Detail</Link>
    </div>
  );
}

export default BoardEdit;
```

<br>

**App.js 설정**

```javascript
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/insert" element={<BoardInsert />} />
        <Route path="/boards/detail/:no" element={<BoardDetail />} />
        <Route path="/boards/edit/:no" element={<BoardEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
```

<br>

**index.js 설정**

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br><br><br>

## 8-4. Axios 문법 및 사용

### 8-4-1. Axios 문법

Axios는 JavaScript에서 HTTP 요청을 쉽게 처리할 수 있도록 돕는 인기 있는 라이브러리입니다. Axios를 사용하면 서버와의 비동기 통신을 간편하게 구현할 수 있습니다. 

<br>

**기본 개념**

Axios는 HTTP 요청을 보내고 응답을 받는 기능을 제공하는 클라이언트 사이드 라이브러리입니다. 주로 RESTful API와 상호작용할 때 사용되며, 다음과 같은 기본 개념을 가지고 있습니다:

1. Promise 기반: Axios는 Promise를 기반으로 비동기 작업을 처리합니다. 이는 비동기 요청과 응답을 쉽게 관리할 수 있게 해줍니다.
2. 요청과 응답 변환: 요청과 응답을 자동으로 JSON으로 변환하여, JSON 형태의 데이터를 쉽게 처리할 수 있습니다.
클라이언트 측 요청: 브라우저에서 직접 요청을 보내고 응답을 받을 수 있습니다.

<br>

**특징**

1. 간단한 API: Axios는 간결하고 이해하기 쉬운 API를 제공합니다.
2. 자동 JSON 변환: 서버의 JSON 응답을 자동으로 JavaScript 객체로 변환합니다.
3. HTTP 요청과 응답 인터셉터: 요청과 응답을 가로채어 추가 처리를 할 수 있습니다.
4. 취소 토큰: 요청을 취소할 수 있는 기능을 제공합니다.
5. 타임아웃 설정: 요청의 타임아웃을 설정할 수 있습니다.
6. 데이터 요청과 응답의 트랜스폼: 요청과 응답 데이터를 변환할 수 있습니다.

<br>

#### 8-4-1-1. Axios 기본 사용

Axios를 사용하기 전에 라이브러리를 설치해야 합니다. 프로젝트에 Axios를 설치하려면 다음 명령어를 사용합니다:

```bash
npm install axios
```

<br>

#### 8-4-1-2. 기본 사용법

```javascript
import axios from 'axios';

// GET 요청
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// POST 요청
axios.post('https://api.example.com/data', {
    key1: 'value1',
    key2: 'value2'
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

<br>

#### 8-4-1-3. 지원하는 전송 방식과 사용 문법

**GET**

GET 요청은 서버에서 데이터를 요청할 때 사용합니다.

```javascript
axios.get(url, config)
  .then(response => /* handle success */)
  .catch(error => /* handle error */);
```

<br>

**POST**

POST 요청은 서버에 데이터를 생성하거나 제출할 때 사용합니다.

```javascript
axios.post(url, data, config)
  .then(response => /* handle success */)
  .catch(error => /* handle error */);
```

<br>

**PUT**

PUT 요청은 서버에 있는 데이터를 수정할 때 사용합니다.

```javascript
axios.put(url, data, config)
  .then(response => /* handle success */)
  .catch(error => /* handle error */);
```

<br>

**DELETE**

DELETE 요청은 서버에서 데이터를 삭제할 때 사용합니다.

```javascript
axios.delete(url, config)
  .then(response => /* handle success */)
  .catch(error => /* handle error */);
```

<br>

**요청과 응답 인터셉터**

요청이나 응답을 가로채어 추가 처리를 할 수 있습니다.

```javascript
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
}, error => {
  console.error('Request Error', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.error('Response Error', error);
  return Promise.reject(error);
});
```

<br>

**취소 토큰**

요청을 취소할 수 있는 기능을 제공합니다.

```javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('https://api.example.com/items', {
    cancelToken: source.token
  })
  .then(response => {
    console.log('Items:', response.data);
  })
  .catch(thrown => {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    } else {
      console.error('Error fetching items:', thrown);
    }
  });

// 요청 취소
source.cancel('Operation canceled by the user.');
```

<br>

**타임아웃 설정**

요청의 타임아웃을 설정할 수 있습니다.

```javascript
axios.get('https://api.example.com/items', {
    timeout: 1000 // 1초
  })
  .then(response => {
    console.log('Items:', response.data);
  })
  .catch(error => {
    console.error('Error fetching items:', error);
  });
```

<br><br>

### 8-4-2. 프로젝트 생성

리액트 애플리케이션에서 Axios를 사용하여 HTTP 비동기 통신을 처리하는 예제를 다루겠습니다. 이 예제는 Home, BoardList, BoardInsert, BoardDetail, BoardEdit 컴포넌트를 포함하며, React Router를 사용하여 각 페이지를 연결합니다. Axios를 통해 GET, POST, PUT, DELETE 요청을 처리합니다.

<br>

**프로젝트 구조**

```lua
chap08_axios/
├── src
│   ├── components
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   │   ├── BoardList.js
│   │   └── Home.js
│   ├── App.js
│   ├── index.js
│   └── axios.js
└── package.json
```

<br>

**프로젝트 생성**

```bash
npx create-react-app chap08_axios
cd chap08_axios
```

<br>

**필요한 패키지 설치**

```bash
npm install axios react-router-dom
```

<br>

**src/axios.js**

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8085/company/boards'
});

export default instance;
```

<br><br>

### 8-4-3. 컴포넌트 구현

**src/components/Home.js**

```javascript
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Board Management System</h1>
    </div>
  );
};

export default Home;
```

<br>

**src/components/BoardList.js**

```javascript
import React, { useState, useEffect } from 'react';
import axios from '../axios';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching boards:', error));
  }, []);

  return (
    <div>
      <h1>Board List</h1>
      <ul>
        {boards.map(board => (
          <li key={board.no}>
            <a href={`/board/${board.no}`}>{board.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
```

<br>

**src/components/BoardInsert.js**

```javascript
import React, { useState } from 'react';
import axios from '../axios';

const BoardInsert = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/insert', { title, content, author })
      .then(response => {
        alert('Board inserted successfully');
      })
      .catch(error => {
        console.error('Error inserting board:', error);
      });
  };

  return (
    <div>
      <h1>Insert New Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BoardInsert;
```

<br>

**src/components/BoardDetail.js**

```javascript
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const [board, setBoard] = useState(null);
  const { no } = useParams();

  useEffect(() => {
    axios.get(`/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching board detail:', error));
  }, [no]);

  if (!board) return <div>Loading...</div>;

  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
    </div>
  );
};

export default BoardDetail;
```

<br>

**src/components/BoardEdit.js**

```javascript
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { useParams, useNavigate } from 'react-router-dom';

const BoardEdit = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/detail?no=${no}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => console.error('Error fetching board detail:', error));
  }, [no]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('/update', { no, title, content, author })
      .then(response => {
        alert('Board updated successfully');
        navigate(`/board/${no}`);
      })
      .catch(error => {
        console.error('Error updating board:', error);
      });
  };

  return (
    <div>
      <h1>Edit Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BoardEdit;
```

<br><br>

### 8-4-4. App 컴포넌트에서 라우터 설정

**src/App.js**

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/insert" element={<BoardInsert />} />
        <Route path="/board/:no" element={<BoardDetail />} />
        <Route path="/board/:no/edit" element={<BoardEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
```

<br><br>

### 8-4-5. 메인 진입점 설정

**src/index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

<br><br><br>

## 8-5. Suspense 적용

React의 Suspense는 컴포넌트가 비동기적으로 데이터를 로드하거나 지연 로딩할 때 UI를 처리하는 방법을 제공합니다. 이 기능은 주로 컴포넌트의 지연 로딩(lazy loading)과 데이터 로딩 상태를 관리하는 데 사용됩니다. 

<br><br>

### 8-5-1. 기본 개념

목적: Suspense는 비동기적으로 데이터를 로드하거나 지연 로딩할 때, 로딩 상태를 관리하고 사용자에게 로딩 중임을 알려주는 UI를 제공하는 데 사용됩니다. 이를 통해 비동기 처리가 완료될 때까지 대기 중인 컴포넌트를 적절히 표시할 수 있습니다.

사용 예: Suspense는 주로 React.lazy와 함께 사용됩니다. React.lazy를 사용하여 동적으로 컴포넌트를 로드할 수 있으며, 이때 Suspense를 사용하여 로딩 상태를 관리합니다.

<br>

**특징**

1. 동적 임포트 지원: Suspense는 동적 임포트(import())와 함께 사용되어 지연 로딩을 지원합니다. 이는 코드 스플리팅을 통해 애플리케이션의 성능을 개선할 수 있게 합니다.

2. 로딩 UI 제공: Suspense는 컴포넌트가 로드되는 동안 보여줄 로딩 UI를 설정할 수 있게 해줍니다. 이 로딩 UI는 fallback 속성을 통해 지정합니다.

3. 데이터 페칭과의 통합: Suspense는 데이터 로딩 상태를 처리하는 데 사용할 수 있습니다. 이를 통해 서버에서 데이터를 로드하는 동안 적절한 UI를 제공할 수 있습니다.

<br><br>

### 8-5-2. 컴포넌트 지연 로딩

React.lazy와 Suspense를 함께 사용하여 컴포넌트를 지연 로딩할 수 있습니다.

```jsx
import React, { Suspense, lazy } from 'react';

// 지연 로딩할 컴포넌트
const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
```

lazy(): 컴포넌트를 동적으로 임포트합니다.
Suspense: fallback 속성을 사용하여 로딩 중에 표시할 UI를 정의합니다.

<br>

**데이터 로딩과 함께 사용**

데이터 로딩을 관리하는 경우에는 React Suspense와 함께 데이터 페칭 라이브러리(예: Relay, React Query)와 통합할 수 있습니다. 그러나 이 기능은 최신 React 버전에서 더욱 원활하게 작동합니다.

<br><br>

### 8-5-3. 주의사항

1. 에러 처리: Suspense는 에러 바운더리를 자동으로 제공하지 않습니다. 에러가 발생하면 애플리케이션이 중단될 수 있으므로, ErrorBoundary를 사용하여 에러를 처리하는 것이 좋습니다.

2. 서버 사이드 렌더링: Suspense는 클라이언트 사이드 렌더링에서 주로 사용됩니다. 서버 사이드 렌더링(SSR)에서 Suspense를 사용할 때는 주의가 필요하며, 추가적인 설정이 필요할 수 있습니다.

3. 비동기 데이터 로딩: Suspense는 기본적으로 React.lazy와 함께 사용됩니다. 데이터 로딩에 사용할 경우, 해당 라이브러리와의 호환성 및 Suspense를 활용하는 패턴을 이해해야 합니다.

4. 중첩 사용: Suspense는 중첩해서 사용할 수 있습니다. 예를 들어, 하나의 Suspense 안에 다른 Suspense를 중첩하여 각각의 비동기 처리를 개별적으로 관리할 수 있습니다.

```jsx
<Suspense fallback={<div>Loading outer component...</div>}>
  <OuterComponent />
  <Suspense fallback={<div>Loading inner component...</div>}>
    <InnerComponent />
  </Suspense>
</Suspense>
```

<br>

## 8-6. 비동기 통신적용 프로젝트

리액트에서 React.lazy와 Suspense를 사용하여 코드 분할(Code Splitting)을 구현하는 방법을 설명하면서, 주어진 board 테이블을 CRUD (생성, 읽기, 업데이트, 삭제)할 수 있습니다.

<br>

### 8-6-1. 프로젝트 설정

**프로젝트 설정 및 패키지 설치**

```bash
npx create-react-app chap08_suspense
cd chap08_suspense
npm install axios
```

axios는 API 요청을 위해 사용할 라이브러리입니다.

<br><br>

### 8-6-2. 프로젝트 구조

```lua
chap08_suspense/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardForm.js
│   │   ├── BoardItem.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── BoardPage.js
│   ├── api/
│   │   └── boardApi.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── package.json
```

<br><br>

### 8-6-3. 컴포넌트 및 페이지 구현

#### 8-6-3-1. API 호출 (src/api/boardApi.js)

axios를 사용하여 백엔드 API와 통신하는 함수를 구현합니다. 여기서는 RESTful API를 가정합니다.

**src/api/boardApi.js**

```jsx
import axios from 'axios';

const API_URL = 'http://localhost:8085/company/boards'; // 서버 URL

export const getBoards = () => axios.get(API_URL);
export const getBoardById = (id) => axios.get(`${API_URL}/${id}`);
export const createBoard = (data) => axios.post(API_URL, data);
export const updateBoard = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBoard = (id) => axios.delete(`${API_URL}/${id}`);
```

<br>

#### 8-6-3-2. 컴포넌트 구현

**src/components/BoardList.js**

게시판 목록을 표시합니다.

```jsx
import React from 'react';
import { useQuery } from 'react-query';
import { getBoards } from '../api/boardApi';
import BoardItem from './BoardItem';

function BoardList() {
    const { data, error, isLoading } = useQuery('boards', getBoards);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Board List</h2>
            {data?.data.map(board => (
                <BoardItem key={board.no} board={board} />
            ))}
        </div>
    );
}

export default BoardList;
```

<br><br>

**src/components/BoardItem.js**

각 게시판 항목을 표시합니다.

```jsx
import React from 'react';

function BoardItem({ board }) {
    return (
        <div>
            <h3>{board.title}</h3>
            <p>{board.content}</p>
            <p>Author: {board.author}</p>
            <p>Date: {new Date(board.resdate).toLocaleDateString()}</p>
            <p>Hits: {board.hits}</p>
        </div>
    );
}

export default BoardItem;
```

<br>

**src/components/BoardForm.js**

게시판 항목을 추가하거나 업데이트합니다.

```jsx
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createBoard, updateBoard } from '../api/boardApi';

function BoardForm({ board }) {
    const [title, setTitle] = useState(board ? board.title : '');
    const [content, setContent] = useState(board ? board.content : '');
    const [author, setAuthor] = useState(board ? board.author : '');
    const queryClient = useQueryClient();
    
    const mutation = useMutation(board ? 
        () => updateBoard(board.no, { title, content, author }) :
        () => createBoard({ title, content, author }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('boards');
            }
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <label>
                Author:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <button type="submit">{board ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default BoardForm;
```

<br><br>

#### 8-6-3-3. 페이지 구현

**src/pages/HomePage.js**

애플리케이션의 홈 페이지입니다.

```jsx
import React from 'react';
import BoardList from '../components/BoardList';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Board Application</h1>
            <BoardList />
        </div>
    );
}

export default HomePage;
```

<br>

**src/pages/BoardPage.js**

게시판 항목을 추가하거나 수정할 수 있는 페이지입니다.

```jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BoardForm from '../components/BoardForm';
import { getBoardById } from '../api/boardApi';
import { useQuery } from 'react-query';

function BoardPage() {
    const { id } = useParams();
    const { data: board, error, isLoading } = useQuery(['board', id], () => getBoardById(id), {
        enabled: !!id
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>{id ? 'Edit Board' : 'Create Board'}</h1>
            <BoardForm board={board?.data} />
        </div>
    );
}

export default BoardPage;
```

<br><br>

#### 8-6-3-4. App.js

라우팅과 React.lazy 및 Suspense를 설정합니다.

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const BoardPage = lazy(() => import('./pages/BoardPage'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/board/:id" element={<BoardPage />} />
                    <Route path="/board/new" element={<BoardPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
```

<br><br>

#### 8-6-3-5. index.js

리액트 애플리케이션의 진입점입니다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

<br><br>

### 8-6-4. 프로젝트 설명

React.lazy: 동적 import를 사용하여 컴포넌트를 지연 로딩합니다. 컴포넌트가 필요할 때만 로드되므로 초기 로딩 시간이 줄어듭니다.

Suspense: React.lazy로 로드되는 컴포넌트가 로딩 중일 때 표시할 fallback UI를 설정합니다. 위 예제에서는 로딩 중일 때 "Loading..." 메시지를 표시합니다.

useQuery: react-query를 사용하여 서버에서 데이터를 가져오고 상태를 관리합니다. 이는 비동기 데이터 fetching을 간편하게 처리할 수 있게 해줍니다.

<br><br><br>

# 9. 리덕스(Redux) 의 상태 관리

## 9-1. 리액트의 상태 관리

리액트에서의 상태 관리(State Management)는 애플리케이션의 상태를 관리하고 이 상태를 기반으로 UI를 업데이트하는 방법을 의미합니다. 리액트는 UI가 상태에 의존하도록 설계되어 있으며, 상태는 컴포넌트가 어떤 데이터를 가질지와 이 데이터가 어떻게 변할지를 정의합니다.

<br>

### 9-1-1. 컴포넌트 상태 (Component State)

개념: 각 컴포넌트는 자신만의 상태를 가질 수 있으며, 이 상태는 useState 훅을 사용하여 정의합니다.
용도: 컴포넌트가 내부적으로 데이터를 관리하고 이를 기반으로 UI를 렌더링할 때 사용됩니다.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You've clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

<br><br>

### 9-1-2. 전역 상태 (Global State)

개념: 애플리케이션 전체에서 공유해야 하는 상태를 관리합니다. 전역 상태는 여러 컴포넌트 간에 상태를 공유하거나 상위 컴포넌트에서 하위 컴포넌트로 상태를 전달할 때 유용합니다.
용도: 애플리케이션의 여러 컴포넌트에서 접근하거나 업데이트해야 하는 상태를 관리할 때 사용됩니다.

<br>

**Context API**

```jsx
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <p>You've clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
```

<br><br>

### 9-1-3. 상태 관리 라이브러리

리액트의 기본 상태 관리 방법 외에도 복잡한 애플리케이션에서 상태 관리를 용이하게 하기 위해 다양한 상태 관리 라이브러리들이 사용됩니다. 대표적인 상태 관리 라이브러리로는 다음이 있습니다:

<br>

**Redux**

Redux: 전역 상태를 관리하는 데 유용하며, 액션과 리듀서를 통해 상태를 변경합니다.

```jsx
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Action
const increment = () => ({ type: 'INCREMENT' });

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>You've clicked {count} times</p>
      <button onClick={() => dispatch(increment())}>Click me</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```

<br>

**MobX**

MobX: 상태를 관찰 가능하게 만들고, 상태 변경을 자동으로 반영합니다.

```jsx
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}

const store = new CounterStore();

const Counter = observer(() => (
  <div>
    <p>You've clicked {store.count} times</p>
    <button onClick={() => store.increment()}>Click me</button>
  </div>
));

function App() {
  return <Counter />;
}

export default App;
```

### 9-1-4. Custom Hooks

개념: 복잡한 상태 관리 로직을 재사용 가능하게 만들기 위해 커스텀 훅을 정의할 수 있습니다.
용도: 상태 관리 로직을 추상화하여 여러 컴포넌트에서 재사용할 때 유용합니다.


```jsx
import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
}

function Counter() {
  const { count, increment } = useCounter();
  return (
    <div>
      <p>You've clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default Counter;
```

<br><br>

## 9-2. 플럭스 아키텍처(Flux Architecture)

Flux는 페이스북(Facebook)에서 개발한 애플리케이션 아키텍처로, 애플리케이션의 상태를 예측 가능하게 관리하고 데이터 흐름을 단순화하는데 초점을 맞추고 있습니다. Flux는 다음과 같은 주요 구성 요소로 이루어져 있습니다:

<br>

### 9-2-1. 액션 (Actions)

개념: 애플리케이션에서 발생하는 이벤트나 사용자 인터랙션을 나타내는 객체입니다.
특징: 액션은 일반적으로 type 속성을 가지며, 추가적인 데이터(payload)를 포함할 수 있습니다.

<br><br>

### 9-2-2. 디스패처 (Dispatcher)

개념: 액션을 수신하고, 이를 적절한 스토어(Store)에 전달하는 중앙 집중식의 이벤트 루프 역할을 합니다.
특징: Flux 애플리케이션의 단일 디스패처는 모든 액션을 전달하며, 이를 통해 스토어를 업데이트합니다.

<br><br>

### 9-2-3. 스토어 (Stores)

개념: 애플리케이션의 상태와 로직을 관리합니다. 스토어는 액션을 받아서 상태를 업데이트하고, 변경된 상태를 컴포넌트에 전달합니다.
특징: 스토어는 애플리케이션의 상태를 저장하고, 상태의 변경을 감지할 수 있도록 합니다.

<br><br>

### 9-2-4. 뷰 (Views)

개념: 상태에 따라 UI를 렌더링하는 컴포넌트입니다.
특징: 뷰는 상태가 변경될 때마다 스토어로부터 업데이트를 받고, 이를 기반으로 UI를 다시 렌더링합니다.

<br>

### 9-2-5. 디스패처-스토어 상호작용

작동 원리: 액션이 디스패처를 통해 스토어로 전달되면, 스토어는 액션의 타입과 내용을 기반으로 상태를 업데이트하고, 상태가 변경되면 뷰를 다시 렌더링합니다.

<br><br>

### 9-2-6. Flux 실습

Flux는 그 자체로 특정 라이브러리를 사용하지 않으며, 기본적인 아이디어와 패턴을 직접 구현할 수 있습니다. 

**Action.js**

```jsx
// Action.js
export const incrementCounter = () => ({
  type: 'INCREMENT'
});
```

<br>

**Dispatcher.js**

```jsx
// Dispatcher.js
class Dispatcher {
  constructor() {
    this._callbacks = [];
  }

  register(callback) {
    this._callbacks.push(callback);
  }

  dispatch(action) {
    this._callbacks.forEach(callback => callback(action));
  }
}

export default new Dispatcher();
```

<br>

**Store.js**

```jsx
// Store.js
import { Dispatcher } from './Dispatcher';

const state = {
  count: 0
};

const listeners = [];

const Store = {
  getState() {
    return state;
  },
  
  subscribe(listener) {
    listeners.push(listener);
  },

  dispatch(action) {
    switch(action.type) {
      case 'INCREMENT':
        state.count += 1;
        break;
      default:
        break;
    }
    listeners.forEach(listener => listener());
  }
};

Dispatcher.register(Store.dispatch.bind(Store));
export default Store;
```

<br>

**App.js**

```jsx
// App.js
import React, { useEffect, useState } from 'react';
import Store from './Store';
import { incrementCounter } from './Action';

function App() {
  const [count, setCount] = useState(Store.getState().count);

  useEffect(() => {
    Store.subscribe(() => {
      setCount(Store.getState().count);
    });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => Store.dispatch(incrementCounter())}>
        Increment
      </button>
    </div>
  );
}

export default App;
```

<br><br>

## 9-3. 리덕스(Redux) 적용

Redux는 Flux의 개념을 기반으로 하여 상태 관리를 단순화하고 예측 가능하게 만든 상태 관리 라이브러리입니다.

<br>

**액션 (Actions)**

개념: 애플리케이션에서 발생하는 이벤트를 나타내는 객체입니다.
특징: 액션은 일반적으로 type 속성과 필요한 추가 데이터를 포함합니다.

<br>

**리듀서 (Reducers)**

개념: 액션을 처리하여 새로운 상태를 반환하는 순수 함수입니다.
특징: 이전 상태와 액션을 인자로 받아 새로운 상태를 반환합니다.

<br>

**스토어 (Store)**

개념: 애플리케이션의 전체 상태를 저장하고, 상태를 변경할 수 있는 메소드를 제공합니다.
특징: 스토어는 리듀서와 액션을 통해 상태를 업데이트하며, 상태 변경 시 구독된 컴포넌트에 업데이트를 전달합니다.

<br>

**디스패처 (Dispatcher)**

개념: 액션을 리듀서에 전달하고 상태를 업데이트합니다.
특징: Redux의 디스패처는 스토어에 내장되어 있으며, 액션을 디스패치하여 상태를 업데이트합니다.

<br><br>

### 9-3-1. 설치

```bash
npm install redux react-redux
```

<br><br>

### 9-3-2. 리듀서 정의

**reducer.js**

```jsx
// reducer.js
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;
```

<br><br>

### 9-3-3. 스토어 설정

**store.js**

```jsx
// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;
```

<br><br>

### 9-3-4. 액션 생성

**actions.js**

```jsx
// actions.js
export const increment = () => ({
  type: 'INCREMENT'
});
```

<br><br>

### 9-3-5. 컴포넌트 구현

**App.js**

```jsx
// App.js
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { increment } from './actions';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```

<br><br>

## 9-4. 다중 리듀서(Multiple Reducer)

다중 리듀서(Multiple Reducer)는 Redux 애플리케이션에서 리듀서를 분리하여 관리하는 패턴입니다. 이 패턴은 애플리케이션의 상태를 여러 개의 리듀서로 나누어 각 리듀서가 특정 상태 부분만을 관리하도록 합니다. 이를 통해 코드의 유지 보수성을 높이고, 상태 관리의 복잡성을 줄일 수 있습니다.

<br>

### 9-4-1. 기본 개념

리듀서 (Reducer): Redux에서 상태를 업데이트하는 함수입니다. 액션을 받아서 새로운 상태를 반환합니다.
루트 리듀서 (Root Reducer): 여러 개의 리듀서를 결합하여 애플리케이션의 전체 상태를 관리합니다. combineReducers 함수를 사용하여 여러 리듀서를 결합합니다.

<br><br>

### 9-4-2. 특징

분리된 상태 관리: 각 리듀서가 애플리케이션 상태의 일부를 담당하므로, 각 상태 조각을 독립적으로 관리할 수 있습니다.
모듈화: 상태 관리 로직이 모듈화되어 유지보수가 쉬워집니다.
확장성: 애플리케이션이 커지더라도 각 리듀서가 관리하는 상태 범위를 좁힐 수 있어 확장성이 좋습니다.

<br><br>

### 9-4-3. 기본 문법

리듀서 정의: 애플리케이션의 상태 조각을 관리하는 리듀서를 정의합니다.
combineReducers: 여러 리듀서를 결합하여 루트 리듀서를 생성합니다.
스토어 생성: 루트 리듀서를 사용하여 스토어를 생성합니다.

<br>

#### 9-4-3-1. 리듀서 정의

```jsx
// reducers/counterReducer.js
const initialCounterState = { count: 0 };

function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
```

<br>

```jsx
// reducers/userReducer.js
const initialUserState = { name: 'Guest' };

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { name: action.payload };
    default:
      return state;
  }
}

export default userReducer;
```

<br>

#### 9-4-3-2. 루트 리듀서 생성

```jsx
// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;
```

<br>

#### 9-4-3-3. 스토어 생성

```jsx
// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
```

<br>

#### 9-4-3-4. 액션 생성

```jsx
// actions/counterActions.js
export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});
```

<br>

```jsx
// actions/userActions.js
export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name
});
```

<br>

#### 9-4-3-5. 컴포넌트 구현

```jsx
// components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
```

<br>

```jsx
// components/User.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../actions/userActions';

function User() {
  const name = useSelector(state => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => dispatch(setName('Alice'))}>Set Name to Alice</button>
      <button onClick={() => dispatch(setName('Bob'))}>Set Name to Bob</button>
    </div>
  );
}

export default User;
```

<br>

#### 9-4-3-6. 애플리케이션 구성

```jsx
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import User from './components/User';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <User />
      </div>
    </Provider>
  );
}

export default App;
```

<br><br><br>

## 9-5. 리덕스(Redux) 미들웨어(Middleware)

Redux 미들웨어는 Redux의 스토어에서 액션이 디스패치되었을 때, 액션이 리듀서에 도달하기 전에 중간에서 처리할 수 있는 기능을 제공합니다. 미들웨어는 주로 비동기 작업을 처리하거나, 액션을 로깅하거나, 오류를 핸들링하는 등 다양한 작업을 수행할 수 있습니다.

<br>

### 9-5-1. 기본 개념 및 특징

순서: 미들웨어는 액션이 리듀서에 도달하기 전에 실행됩니다. 액션이 리듀서에 도달하기 전에 미들웨어를 통해 처리될 수 있습니다.
비동기 처리: Redux 자체는 비동기 작업을 지원하지 않지만, 미들웨어를 통해 비동기 처리를 지원할 수 있습니다.
확장성: 미들웨어를 사용하면 Redux의 기능을 확장하고, 다양한 부가 기능을 쉽게 추가할 수 있습니다.
구성: 미들웨어는 스토어 생성 시 applyMiddleware를 사용하여 스토어에 추가됩니다.
기본 문법
미들웨어는 Redux의 applyMiddleware 함수를 사용하여 스토어 생성 시 적용합니다. 미들웨어는 다음과 같은 형태로 작성됩니다:

```jsx
const myMiddleware = store => next => action => {
  // 미들웨어 로직
  return next(action); // 액션을 다음 미들웨어 또는 리듀서로 전달
};
```

<br><br>

### 9-5-2. 주요 미들웨어

Redux Thunk: 비동기 액션을 처리하기 위한 미들웨어입니다. 액션 생성자에서 함수를 반환할 수 있도록 합니다.
Redux Saga: 복잡한 비동기 로직을 처리하기 위한 미들웨어입니다. 제너레이터 함수를 사용하여 비동기 로직을 관리합니다.
Redux Logger: 액션과 상태 변화를 콘솔에 로깅하는 미들웨어입니다.

<br><br>

### 9-5-3. Redux Thunk 사용

**설치**

```bash
npm install redux-thunk
```

<br>

**미들웨어 설정**

```jsx
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```

<br>

**비동기 액션 생성**

```jsx
// actions.js
export const fetchData = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
```

<br>

**리듀서**

```jsx
// reducers.js
const initialState = {
  data: [],
  loading: false,
  error: null
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default dataReducer;
```

<br>

**컴포넌트**

```jsx
// DataComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataComponent;
```

<br><br>

### 9-5-4. Redux Logger 사용

**설치**

```bash
npm install redux-logger
```

<br>

**미들웨어 설정**

```js
// store.js
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
```

<br>

**액션 디스패치**

```jsx
// actions.js
export const increment = () => ({
  type: 'INCREMENT'
});
```

<br>

**리듀서**

```jsx
// reducers.js
const initialState = { count: 0 };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default rootReducer;
```

<br>

**컴포넌트**

```jsx
// CounterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './actions';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterComponent;
```

<br><br><br>

# 10. React CSS Framework 적용

## 10-1. Bootstrap 

### 10-1. 프로젝트 구조

```lua
part01_bootstrap/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   └── App.js
│   └── index.js
├── package.json
└── .env
```

<br>

**프로젝트 생성 및 패키지 설치**

```bash
npx create-react-app part01_bootstrap
cd part01_bootstrap
npm install router react-router-dom axios bootstrap react-dom/client
```

<br><br>

### 10-1-2. 프로젝트 파일 작성

#### 10-1-2-1. index.html

public/index.html 파일은 React의 엔트리 포인트입니다. Bootstrap을 포함하여 작성합니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Part01 Bootstrap</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

<br>

#### 10-1-2-2. index.js

src/index.js 파일은 React 애플리케이션의 진입점입니다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br>

#### 10-1-2-3. App.js

src/App.js 파일은 라우팅 및 전역 레이아웃을 관리합니다.

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">Company Board</h1>
        <Routes>
          <Route path="/company/boards/list" element={<BoardList />} />
          <Route path="/company/boards/detail" element={<BoardDetail />} />
          <Route path="/company/boards/update" element={<BoardEdit />} />
          <Route path="/company/boards/insert" element={<BoardInsert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

<br>

#### 10-1-2-4. BoardList.js

게시판 목록을 표시하는 컴포넌트입니다. GET 요청을 사용해 데이터를 가져옵니다.

```javascript
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/company/boards/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Link to="/company/boards/insert" className="btn btn-primary mb-3">New Post</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Hits</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {boards.map(board => (
            <tr key={board.no}>
              <td>{board.no}</td>
              <td>
                <Link to={`/company/boards/detail?no=${board.no}`}>
                  {board.title}
                </Link>
              </td>
              <td>{board.author}</td>
              <td>{board.hits}</td>
              <td>{new Date(board.resdate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
```

<br>

#### 10-1-2-5. BoardDetail.js

게시글의 상세 정보를 표시하는 컴포넌트입니다.

```javascript
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/company/boards/delete?no=${no}`)
      .then(() => {
        alert('Post deleted successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
      <p><strong>Hits:</strong> {board.hits}</p>
      <Link to={`/company/boards/update?no=${no}`} className="btn btn-warning me-2">Edit</Link>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      <Link to="/company/boards/list" className="btn btn-secondary ms-2">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

#### 10-1-2-6. BoardEdit.js

게시글을 수정하는 컴포넌트입니다. PATCH 또는 PUT 요청을 사용합니다.

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardEdit() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8085/company/boards/update?no=${no}`, board)
      .then(() => {
        alert('Post updated successfully');
        navigate(`/company/boards/detail?no=${no}`);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" value={board.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea name="content" value={board.content} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" name="author" value={board.author} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <button onClick={() => navigate(`/company/boards/detail?no=${no}`)} className="btn btn-secondary ms-2">Cancel</button>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br>

#### 10-1-2-7. BoardInsert.js

새로운 게시글을 추가하는 컴포넌트입니다.

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert() {
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/company/boards/insert', board)
      .then(() => {
        alert('Post added successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" value={board.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea name="content" value={board.content} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" name="author" value={board.author} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
        <button onClick={() => navigate('/company/boards/list')} className="btn btn-secondary ms-2">Cancel</button>
      </form>
    </div>
  );
}

export default BoardInsert;
```

<br>

### 10-1-3. 프로젝트 추가 설명

Bootstrap 사용: index.html에 Bootstrap CSS를 포함하여 모든 컴포넌트에서 스타일을 쉽게 적용할 수 있도록 했습니다.
React Router 사용: react-router-dom을 사용하여 각 페이지(목록, 상세보기, 수정, 추가)를 관리합니다.
Axios 사용: API 요청은 axios를 통해 처리합니다. GET, POST, PATCH, DELETE 메서드를 사용하여 CRUD 작업을 수행합니다.
환경 변수 설정: .env 파일에서 API URL을 관리할 수 있습니다. REACT_APP_API_URL 변수로 API 엔드포인트를 설정하고, axios에서 이를 사용하도록 할 수 있습니다.

```env
REACT_APP_API_URL=http://localhost:8085
```

이 프로젝트를 실행하기 위해서는 npm install, npm start 명령어로 애플리케이션을 빌드하고 실행할 수 있습니다.

<br><br><br>

## 10-2. Tailwind

### 10-2-1. 프로젝트 설정 및 패키지 설치

#### 10-2-1-1. 프로젝트 생성 및 초기화

터미널에서 다음 명령어를 사용하여 새로운 React 프로젝트를 생성합니다:

```bash
npx create-react-app part02_tailwind
cd part02_tailwind
```

<br>

#### 10-2-1-2 Tailwind CSS 설치

Tailwind CSS를 프로젝트에 설치하고 설정합니다:

```bash
npm install router react-router-dom axios react-dom/client
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

<br>

#### 10-2-1-3 Tailwind 설정 파일 수정

tailwind.config.js 파일을 열고 아래와 같이 수정합니다:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br>

#### 10-2-1-4 Tailwind를 CSS에 적용

src/index.css 파일을 열고 다음 내용을 추가하여 Tailwind를 활성화합니다:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br><br>

### 10-2-2. 프로젝트 파일 트리 구조

```lua
part02_tailwind/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   └── App.js
│   └── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── .env
```

<br><br>

### 10-2-3. 프로젝트 파일 작성

#### 10-2-3-1. index.html

public/index.html 파일은 React의 엔트리 포인트입니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Part02 Tailwind</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

<br>

#### 10-2-3-2. index.js

src/index.js 파일은 React 애플리케이션의 진입점입니다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br>

#### 10-2-3-3. App.js

src/App.js 파일은 라우팅 및 전역 레이아웃을 관리합니다.

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">Company Board</h1>
        <Routes>
          <Route path="/company/boards/list" element={<BoardList />} />
          <Route path="/company/boards/detail" element={<BoardDetail />} />
          <Route path="/company/boards/update" element={<BoardEdit />} />
          <Route path="/company/boards/insert" element={<BoardInsert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

<br>

#### 10-2-3-4. BoardList.js

게시판 목록을 표시하는 컴포넌트입니다. GET 요청을 사용해 데이터를 가져옵니다.

```javascript
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/company/boards/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Link to="/company/boards/insert" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">New Post</Link>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2">No</th>
            <th className="py-2">Title</th>
            <th className="py-2">Author</th>
            <th className="py-2">Hits</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {boards.map(board => (
            <tr key={board.no} className="border-t">
              <td className="py-2 text-center">{board.no}</td>
              <td className="py-2 text-center">
                <Link to={`/company/boards/detail?no=${board.no}`} className="text-blue-500">
                  {board.title}
                </Link>
              </td>
              <td className="py-2 text-center">{board.author}</td>
              <td className="py-2 text-center">{board.hits}</td>
              <td className="py-2 text-center">{new Date(board.resdate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
```

<br>

#### 10-2-3-5. BoardDetail.js

게시글의 상세 정보를 표시하는 컴포넌트입니다.

```javascript
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/company/boards/delete?no=${no}`)
      .then(() => {
        alert('Post deleted successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{board.title}</h2>
      <p className="mb-4">{board.content}</p>
      <p className="mb-2"><strong>Author:</strong> {board.author}</p>
      <p className="mb-2"><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
      <p className="mb-4"><strong>Hits:</strong> {board.hits}</p>
      <Link to={`/company/boards/update?no=${no}`} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</Link>
      <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      <Link to="/company/boards/list" className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

#### 10-2-3-6. BoardEdit.js

게시글을 수정하는 컴포넌트입니다. PATCH 또는 PUT 요청을 사용합니다.

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardEdit() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8085/company/boards/update?no=${no}`, board)
      .then(() => {
        alert('Post updated successfully');
        navigate(`/company/boards/detail?no=${no}`);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input type="text" name="title" value={board.title} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea name="content" value={board.content} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Author</label>
          <input type="text" name="author" value={board.author} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
        <button onClick={() => navigate(`/company/boards/detail?no=${no}`)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br>

#### 10-2-3-7. BoardInsert.js

새 게시글을 추가하는 컴포넌트입니다. POST 요청을 사용합니다.

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert() {
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/company/boards/insert', board)
      .then(() => {
        alert('Post added successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input type="text" name="title" value={board.title} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea name="content" value={board.content} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Author</label>
          <input type="text" name="author" value={board.author} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        <button onClick={() => navigate('/company/boards/list')} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
      </form>
    </div>
  );
}

export default BoardInsert;
```

<br><br>

### 10-2-4. 프로젝트 추가 설명

Tailwind CSS 사용: Tailwind CSS를 사용하여 UI를 구성합니다. Tailwind의 유틸리티 클래스를 사용해 반응형 디자인을 손쉽게 적용했습니다.
React Router 사용: react-router-dom을 사용하여 SPA 방식으로 페이지를 구성했습니다.
Axios 사용: 서버와의 통신은 axios를 통해 이루어지며, 각 API 엔드포인트에 대해 GET, POST, PATCH, DELETE 메서드를 사용합니다.
환경 변수 설정: .env 파일에서 API URL을 관리할 수 있습니다. 예를 들어, REACT_APP_API_URL 변수를 설정하여 사용할 수 있습니다.

<br><br>

### 10-2-5. 프로젝트 실행

프로젝트를 실행하기 위해 다음 명령어를 사용합니다:

```bash
npm install
npm start
```

위 명령어를 통해 프로젝트를 빌드하고 로컬 서버에서 실행할 수 있습니다. Tailwind CSS와 React Router를 활용한 게시판 애플리케이션이 작동하는 것을 확인할 수 있습니다.

<br><br><br>

## 10-3. Bulma 

### 10-3-1. 프로젝트 설정 및 패키지 설치

#### 10-3-1-1. 프로젝트 생성 및 초기화

터미널에서 다음 명령어를 사용하여 새로운 React 프로젝트를 생성합니다:

```bash
npx create-react-app part03_bulma
cd part03_bulma
```

<br>

#### 10-3-1-2. Bulma 설치

Bulma CSS 프레임워크를 프로젝트에 설치합니다:

```bash
npm install bulma router react-router-dom axios react-dom/client
```

<br>

#### 10-3-1-3. Bulma를 CSS에 적용

src/index.css 파일에 Bulma를 포함시킵니다. src/index.js 파일에서 index.css를 포함하여 스타일을 적용합니다.

**src/index.css**

```css
@import 'bulma/css/bulma.min.css';
```

<br><br>

### 10-3-2. 프로젝트 파일 트리 구조

```lua
part03_bulma/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   └── App.js
│   └── index.js
│   └── index.css
├── package.json
└── .env
```

<br><br>

### 10-3-3. 프로젝트 파일 작성

#### 10-3-3-1. index.html

public/index.html 파일은 React의 엔트리 포인트입니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Part03 Bulma</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

<br>

#### 10-3-3-2. index.js

src/index.js 파일은 React 애플리케이션의 진입점입니다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br>

#### 10-3-3-3. App.js

src/App.js 파일은 라우팅 및 전역 레이아웃을 관리합니다.

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title mt-5">Company Board</h1>
        <Routes>
          <Route path="/company/boards/list" element={<BoardList />} />
          <Route path="/company/boards/detail" element={<BoardDetail />} />
          <Route path="/company/boards/update" element={<BoardEdit />} />
          <Route path="/company/boards/insert" element={<BoardInsert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

<br>

#### 10-3-3-4. BoardList.js

게시판 목록을 표시하는 컴포넌트입니다. GET 요청을 사용해 데이터를 가져옵니다.

```javascript
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/company/boards/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Link to="/company/boards/insert" className="button is-primary mb-4">New Post</Link>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Hits</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {boards.map(board => (
            <tr key={board.no}>
              <td>{board.no}</td>
              <td>
                <Link to={`/company/boards/detail?no=${board.no}`}>
                  {board.title}
                </Link>
              </td>
              <td>{board.author}</td>
              <td>{board.hits}</td>
              <td>{new Date(board.resdate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
```

<br>

#### 10-3-3-5. BoardDetail.js

게시글의 상세 정보를 표시하는 컴포넌트입니다.

```javascript
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/company/boards/delete?no=${no}`)
      .then(() => {
        alert('Post deleted successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2 className="title">{board.title}</h2>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
      <p><strong>Hits:</strong> {board.hits}</p>
      <Link to={`/company/boards/update?no=${no}`} className="button is-warning mr-2">Edit</Link>
      <button onClick={handleDelete} className="button is-danger">Delete</button>
      <Link to="/company/boards/list" className="button is-link ml-2">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

#### 10-3-3-6. BoardEdit.js

게시글을 수정하는 컴포넌트입니다. PATCH 또는 PUT 요청을 사용합니다.

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardEdit() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8085/company/boards/update?no=${no}`, board)
      .then(() => {
        alert('Post updated successfully');
        navigate(`/company/boards/detail?no=${no}`);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <div>
      <h2 className="title">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" name="title" value={board.title} onChange={handleChange} className="input" required />
          </div>
        </div>
        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea name="content" value={board.content} onChange={handleChange} className="textarea" required></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input type="text" name="author" value={board.author} onChange={handleChange} className="input" required />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-primary">Update</button>
          </div>
          <div className="control">
            <button onClick={() => navigate(`/company/boards/detail?no=${no}`)} className="button is-link">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br>

#### 10-3-3-7. BoardInsert.js

새 게시글을 추가하는 컴포넌트입니다. POST 요청을 사용합니다.

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert() {
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/company/boards/insert', board)
      .then(() => {
        alert('Post added successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h2 className="title">New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" name="title" value={board.title} onChange={handleChange} className="input" required />
          </div>
        </div>
        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea name="content" value={board.content} onChange={handleChange} className="textarea" required></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input type="text" name="author" value={board.author} onChange={handleChange} className="input" required />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-primary">Add</button>
          </div>
          <div className="control">
            <button onClick={() => navigate('/company/boards/list')} className="button is-link">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BoardInsert;
```

<br><br>

### 10-3-4. 프로젝트 추가 설명

Bulma 사용: Bulma는 간결하고 유연한 CSS 프레임워크로, 다양한 유틸리티 클래스를 제공하여 손쉽게 스타일링이 가능합니다.
React Router 사용: SPA 방식으로 페이지 간 전환을 처리하기 위해 react-router-dom을 사용했습니다.
Axios 사용: 서버와의 통신은 axios를 사용하여 처리합니다.

<br><br>

### 10-3-5. 프로젝트 실행

프로젝트를 실행하기 위해 다음 명령어를 사용합니다:

```bash
npm install
npm start
```

위 명령어를 통해 로컬 서버에서 애플리케이션을 실행할 수 있으며, Bulma를 적용한 React 게시판 애플리케이션이 작동하는 것을 확인할 수 있습니다.

<br><br><br>

## 10-4. Foundation 

### 10-4-1. 프로젝트 설정 및 패키지 설치

#### 10-4-1-1. 프로젝트 생성 및 초기화

터미널에서 다음 명령어를 사용하여 새로운 React 프로젝트를 생성합니다:

```bash
npx create-react-app part04_foundation
cd part04_foundation
```

<br>

#### 10-4-1-2. Foundation 설치

Foundation CSS 프레임워크를 프로젝트에 설치합니다:

```bash
npm install foundation-sites
```

<br>

#### 10-4-1-3. Foundation을 CSS에 적용

src/index.css 파일에 Foundation을 포함시킵니다. src/index.js 파일에서 index.css를 포함하여 스타일을 적용합니다.

**src/index.css**

```css
@import 'foundation-sites/dist/css/foundation.min.css';
```

<br><br>

### 10-4-2. 프로젝트 파일 트리 구조

```lua
part04_foundation/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   └── App.js
│   └── index.js
│   └── index.css
├── package.json
└── .env
```

<br><br>

### 10-4-3. 프로젝트 파일 작성

#### 10-4-3-1. index.html

public/index.html 파일은 React의 엔트리 포인트입니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Part04 Foundation</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```


<br>

#### 10-4-3-2. index.js

src/index.js 파일은 React 애플리케이션의 진입점입니다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```


<br>

#### 10-4-3-3. App.js

src/App.js 파일은 라우팅 및 전역 레이아웃을 관리합니다.

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <h1 className="text-center">Company Board</h1>
        <Routes>
          <Route path="/company/boards/list" element={<BoardList />} />
          <Route path="/company/boards/detail" element={<BoardDetail />} />
          <Route path="/company/boards/update" element={<BoardEdit />} />
          <Route path="/company/boards/insert" element={<BoardInsert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```


<br>

#### 10-4-3-4. BoardList.js

게시판 목록을 표시하는 컴포넌트입니다. GET 요청을 사용해 데이터를 가져옵니다.

```javascript
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/company/boards/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Link to="/company/boards/insert" className="button primary mb-4">New Post</Link>
      <table className="table hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Hits</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {boards.map(board => (
            <tr key={board.no}>
              <td>{board.no}</td>
              <td>
                <Link to={`/company/boards/detail?no=${board.no}`}>
                  {board.title}
                </Link>
              </td>
              <td>{board.author}</td>
              <td>{board.hits}</td>
              <td>{new Date(board.resdate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
```

<br>

#### 10-4-3-5. BoardDetail.js

게시글의 상세 정보를 표시하는 컴포넌트입니다.

```javascript
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/company/boards/delete?no=${no}`)
      .then(() => {
        alert('Post deleted successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
      <p><strong>Hits:</strong> {board.hits}</p>
      <Link to={`/company/boards/update?no=${no}`} className="button warning mr-2">Edit</Link>
      <button onClick={handleDelete} className="button alert">Delete</button>
      <Link to="/company/boards/list" className="button secondary ml-2">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```


<br>

#### 10-4-3-6. BoardEdit.js

게시글을 수정하는 컴포넌트입니다. PATCH 또는 PUT 요청을 사용합니다.

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardEdit() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8085/company/boards/update?no=${no}`, board)
      .then(() => {
        alert('Post updated successfully');
        navigate(`/company/boards/detail?no=${no}`);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <label>Title
              <input type="text" name="title" value={board.title} onChange={handleChange} required />
            </label>
          </div>
          <div className="medium-12 cell">
            <label>Content
              <textarea name="content" value={board.content} onChange={handleChange} required></textarea>
            </label>
          </div>
          <div className="medium-6 cell">
            <label>Author
              <input type="text" name="author" value={board.author} onChange={handleChange} required />
            </label>
          </div>
        </div>
        <button type="submit" className="button primary">Update</button>
        <button onClick={() => navigate(`/company/boards/detail?no=${no}`)} className="button secondary">Cancel</button>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br>

#### 10-4-3-7. BoardInsert.js

새 게시글을 추가하는 컴포넌트입니다. POST 요청을 사용합니다.

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert() {
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/company/boards/insert', board)
      .then(() => {
        alert('Post added successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell">
            <label>Title
              <input type="text" name="title" value={board.title} onChange={handleChange} required />
            </label>
          </div>
          <div className="medium-12 cell">
            <label>Content
              <textarea name="content" value={board.content} onChange={handleChange} required></textarea>
            </label>
          </div>
          <div className="medium-6 cell">
            <label>Author
              <input type="text" name="author" value={board.author} onChange={handleChange} required />
            </label>
          </div>
        </div>
        <button type="submit" className="button primary">Add</button>
        <button onClick={() => navigate('/company/boards/list')} className="button secondary">Cancel</button>
      </form>
    </div>
  );
}

export default BoardInsert;
```

<br><br>

### 10-4-4. 프로젝트 추가 설명

Foundation 사용: Foundation은 유연하고 다양한 UI 컴포넌트를 제공하는 CSS 프레임워크입니다. 반응형 그리드, 버튼, 폼 요소 등 여러 유틸리티 클래스를 사용하여 쉽게 스타일링할 수 있습니다.
React Router 사용: SPA 방식으로 페이지 간 전환을 처리하기 위해 react-router-dom을 사용했습니다.
Axios 사용: 서버와의 통신은 axios를 사용하여 처리합니다.

<br><br>

### 10-4-5. 프로젝트 실행

프로젝트를 실행하기 위해 다음 명령어를 사용합니다:

```bash
npm install
npm start
```

위 명령어를 통해 로컬 서버에서 애플리케이션을 실행할 수 있으며, Foundation을 적용한 React 게시판 애플리케이션이 작동하는 것을 확인할 수 있습니다.

<br><br><br>

## 10-5. Pure 

### 10-5-1. 프로젝트 설정 및 패키지 설치

#### 10-5-1-1. 프로젝트 생성 및 초기화

터미널에서 다음 명령어를 사용하여 새로운 React 프로젝트를 생성합니다:

```bash
npx create-react-app part05_pure
cd part05_pure
```

<br>

#### 10-5-1-2. Pure CSS 설치

Pure CSS를 프로젝트에 설치합니다. Pure는 매우 가벼운 CSS 프레임워크로, React 프로젝트에서는 일반적으로 CDN을 통해 설치하는 것이 가장 간단합니다.

먼저, public/index.html 파일에 Pure CSS CDN을 추가합니다:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Part05 Pure</title>
  <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

이제 Pure CSS가 프로젝트에 포함되었습니다.

<br><br>

### 10-5-2. 프로젝트 구조

```lua
part05_pure/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   └── App.js
│   └── index.js
│   └── index.css
├── package.json
└── .env
```

public/index.html: 애플리케이션의 HTML 템플릿. Pure CSS 링크 포함.
src/components/: React 컴포넌트들.
src/App.js: 라우팅 및 전역 레이아웃.
src/index.js: 애플리케이션의 진입점.
src/index.css: 기본 스타일 시트.

<br><br>

### 10-5-3. 파일 및 코드 설명

#### 10-5-3-1. index.html

public/index.html 파일은 React의 엔트리 포인트입니다. Pure CSS를 적용하기 위해 위에서 설명한 대로 CDN 링크를 포함합니다.

<br>

#### 10-5-3-2. index.js

src/index.js 파일은 React 애플리케이션의 진입점입니다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br>

#### 10-5-3-3. App.js

src/App.js 파일은 라우팅 및 전역 레이아웃을 관리합니다.

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <Router>
      <div className="pure-g">
        <div className="pure-u-1">
          <h1 className="pure-text-center">Company Board</h1>
          <Routes>
            <Route path="/company/boards/list" element={<BoardList />} />
            <Route path="/company/boards/detail" element={<BoardDetail />} />
            <Route path="/company/boards/update" element={<BoardEdit />} />
            <Route path="/company/boards/insert" element={<BoardInsert />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
```

<br>

#### 10-5-3-4. BoardList.js

게시판 목록을 표시하는 컴포넌트입니다. GET 요청을 사용해 데이터를 가져옵니다.

```javascript
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/company/boards/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Link to="/company/boards/insert" className="pure-button pure-button-primary mb-4">New Post</Link>
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Hits</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {boards.map(board => (
            <tr key={board.no}>
              <td>{board.no}</td>
              <td>
                <Link to={`/company/boards/detail?no=${board.no}`}>
                  {board.title}
                </Link>
              </td>
              <td>{board.author}</td>
              <td>{board.hits}</td>
              <td>{new Date(board.resdate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;
```

<br>

#### 10-5-3-5. BoardDetail.js

게시글의 상세 정보를 표시하는 컴포넌트입니다.

```javascript
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/company/boards/delete?no=${no}`)
      .then(() => {
        alert('Post deleted successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
      <p><strong>Hits:</strong> {board.hits}</p>
      <Link to={`/company/boards/update?no=${no}`} className="pure-button pure-button-warning mr-2">Edit</Link>
      <button onClick={handleDelete} className="pure-button pure-button-error">Delete</button>
      <Link to="/company/boards/list" className="pure-button pure-button-secondary ml-2">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

#### 10-5-3-6. BoardEdit.js

게시글을 수정하는 컴포넌트입니다. PATCH 또는 PUT 요청을 사용합니다.

```javascript
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardEdit() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8085/company/boards/update?no=${no}`, board)
      .then(() => {
        alert('Post updated successfully');
        navigate(`/company/boards/detail?no=${no}`);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={board.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={board.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              name="author"
              value={board.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">Update</button>
            <button
              type="button"
              onClick={() => navigate(`/company/boards/detail?no=${no}`)}
              className="pure-button pure-button-secondary"
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br>

#### 10-5-3-7. BoardInsert.js

게시글을 새로 추가하는 컴포넌트입니다. POST 요청을 사용하여 새로운 게시글을 추가합니다.

```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert() {
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/company/boards/insert', board)
      .then(() => {
        alert('Post added successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={board.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={board.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pure-control-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              name="author"
              value={board.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">Add</button>
            <button
              type="button"
              onClick={() => navigate('/company/boards/list')}
              className="pure-button pure-button-secondary"
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default BoardInsert;
```


<br><br>

### 10-5-4. 프로젝트 설명 및 추가 사항

이 프로젝트는 Pure CSS를 사용하여 스타일링한 React SPA 애플리케이션입니다. 게시판의 CRUD 기능을 구현했으며, 서버와의 데이터 통신은 Axios를 사용합니다. 

<br>

**index.css**

기본적으로 스타일을 추가하거나 수정할 때 사용할 수 있는 CSS 파일입니다. Pure CSS 프레임워크가 이미 포함되어 있지만, 필요에 따라 사용자 정의 스타일을 여기에 추가할 수 있습니다.

```css
/* src/index.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

h1 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

button {
  cursor: pointer;
}
```

<br><br>

#### 10-5-5. API 서버 설정

애플리케이션의 API 요청은 http://localhost:8085/company/boards/로 설정되어 있습니다. 서버 측 API는 아래와 같은 RESTful 엔드포인트를 제공합니다:

GET /list: 게시판 목록 조회
GET /detail?no=1: 게시글 상세 조회
POST /insert: 새 게시글 추가
PATCH /update?no=1: 게시글 수정
DELETE /delete?no=1: 게시글 삭제

<br><br>

### 10-5-6. 테스트 및 배포

#### 10-5-6-1. 로컬 테스트

프로젝트가 로컬 환경에서 제대로 작동하는지 확인하려면 다음 명령어를 사용합니다:

```bash
npm start
```

이 명령어는 개발 서버를 시작하고, 브라우저에서 http://localhost:3000에서 애플리케이션을 확인할 수 있습니다.

<br>

#### 10-5-6-2. 배포

배포를 위해 React 애플리케이션을 빌드하고, 빌드된 파일을 웹 서버에 배포합니다.

**프로덕션 빌드 생성**

```bash
npm run build
```

이 명령어는 build/ 디렉토리에 최적화된 프로덕션 빌드를 생성합니다.

<br>

**배포**

생성된 build/ 디렉토리의 내용을 웹 서버에 업로드합니다. Netlify, Vercel, GitHub Pages, 또는 다른 호스팅 서비스에 배포할 수 있습니다.

<br><br><br>

## 10-6. Materialize

### 10-6-1. 프로젝트 생성 및 패키지 설치

#### 10-6-1-1. 프로젝트 생성

터미널에서 다음 명령어를 실행하여 React 프로젝트를 생성합니다:

```bash
npx create-react-app part06_materialize
cd part06_materialize
```

<br>

#### 10-6-1-2. Materialize 설치

Materialize CSS와 관련된 패키지를 설치합니다:

```bash
npm install materialize-css axios react-router-dom
```

<br><br>

### 10-6-2. 프로젝트 구조

아래는 프로젝트의 파일 트리 구조입니다:

```lua
part06_materialize/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── BoardList.js
│   │   ├── BoardDetail.js
│   │   ├── BoardEdit.js
│   │   ├── BoardInsert.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── package.json
└── .env
```

BoardList.js: 게시판 목록을 조회하고 테이블 형태로 표시합니다. 각 게시글에 대한 상세보기 링크를 제공합니다.
BoardDetail.js: 특정 게시글의 상세 정보를 표시하며, 수정 및 삭제 버튼을 제공합니다.
BoardEdit.js: 선택한 게시글을 수정할 수 있는 폼을 제공합니다. 수정 후, 상세보기 페이지로 리다이렉트됩니다.
BoardInsert.js: 새로운 게시글을 추가할 수 있는 폼을 제공합니다.

<br><br>

### 10-6-3. 코드 작성

#### 10-6-3-1. index.js

Materialize CSS를 적용하기 위해 index.js 파일에서 Materialize CSS를 import 합니다:

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import M from 'materialize-css'; // Materialize JS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize Materialize JS components
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
});
```

<br>

#### 10-6-3-2. index.css

기본 스타일링을 설정합니다. Materialize CSS에 따라 기본적인 스타일을 추가합니다:

```css
/* src/index.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.container {
  margin-top: 20px;
}

.card {
  margin-bottom: 20px;
}
```

<br>

#### 10-6-3-3. App.js

애플리케이션의 라우팅을 설정합니다:

```javascript
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/company/boards/list" element={<BoardList />} />
          <Route path="/company/boards/detail" element={<BoardDetail />} />
          <Route path="/company/boards/update" element={<BoardEdit />} />
          <Route path="/company/boards/insert" element={<BoardInsert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

<br>

#### 10-6-3-4. BoardList.js

게시판 목록을 보여주는 컴포넌트입니다:

```javascript
// src/components/BoardList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/company/boards/list')
      .then(response => setBoards(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Board List</h2>
      <Link to="/company/boards/insert" className="btn waves-effect waves-light">Add New Post</Link>
      <div className="card">
        <table className="striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {boards.map(board => (
              <tr key={board.no}>
                <td>{board.no}</td>
                <td>{board.title}</td>
                <td>{board.author}</td>
                <td>
                  <Link to={`/company/boards/detail?no=${board.no}`} className="btn-small">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BoardList;
```

<br>

#### 10-6-3-5. BoardDetail.js

게시글 상세보기 컴포넌트입니다:

```javascript
// src/components/BoardDetail.js
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8085/company/boards/delete?no=${no}`)
      .then(() => {
        alert('Post deleted successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2>{board.title}</h2>
      <p>{board.content}</p>
      <p><strong>Author:</strong> {board.author}</p>
      <p><strong>Date:</strong> {new Date(board.resdate).toLocaleString()}</p>
      <p><strong>Hits:</strong> {board.hits}</p>
      <Link to={`/company/boards/update?no=${no}`} className="btn waves-effect waves-light orange">Edit</Link>
      <button onClick={handleDelete} className="btn waves-effect waves-light red">Delete</button>
      <Link to="/company/boards/list" className="btn waves-effect waves-light grey">Back to List</Link>
    </div>
  );
}

export default BoardDetail;
```

<br>

#### 10-6-3-6. BoardEdit.js

게시글을 수정하는 컴포넌트입니다:

```javascript
// src/components/BoardEdit.js
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardEdit() {
  const [searchParams] = useSearchParams();
  const no = searchParams.get('no');
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8085/company/boards/detail?no=${no}`)
      .then(response => setBoard(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [no]);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8085/company/boards/update?no=${no}`, board)
      .then(() => {
        alert('Post updated successfully');
        navigate(`/company/boards/detail?no=${no}`);
      })
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit} className="card">
        <div className="card-content">
          <div className="input-field">
            <input
              id="title"
              type="text"
              name="title"
              value={board.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              name="content"
              className="materialize-textarea"
              value={board.content}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <input
              id="author"
              type="text"
              name="author"
              value={board.author}
              onChange={handleChange}
              required
            />
            <label htmlFor="author">Author</label>
          </div>
          <button type="submit" className="btn waves-effect waves-light">Update</button>
          <button
            type="button"
            onClick={() => navigate(`/company/boards/detail?no=${no}`)}
            className="btn waves-effect waves-light grey"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardEdit;
```

<br>

#### 10-6-3-7. BoardInsert.js

게시글을 추가하는 컴포넌트입니다:

```javascript
// src/components/BoardInsert.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BoardInsert() {
  const [board, setBoard] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/company/boards/insert', board)
      .then(() => {
        alert('Post added successfully');
        navigate('/company/boards/list');
      })
      .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} className="card">
        <div className="card-content">
          <div className="input-field">
            <input
              id="title"
              type="text"
              name="title"
              value={board.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              name="content"
              className="materialize-textarea"
              value={board.content}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <input
              id="author"
              type="text"
              name="author"
              value={board.author}
              onChange={handleChange}
              required
            />
            <label htmlFor="author">Author</label>
          </div>
          <button type="submit" className="btn waves-effect waves-light">Add</button>
          <button
            type="button"
            onClick={() => navigate('/company/boards/list')}
            className="btn waves-effect waves-light grey"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardInsert;
```

