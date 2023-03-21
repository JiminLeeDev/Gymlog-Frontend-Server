# Gymlog-Backend-Server 개발 문서
## 소개
 이 프로젝트는 스쳐지나가는 생각들을 게시글을 통해 묶어두기 위해 만들어진 프로젝트입니다. 사용자는 계정을 통해 페이지에서 게시글을 작성하고 공유할 수 있으며, 다른 사용자의 페이지에 코멘트를 추가할 수도 있습니다.
## 프로젝트를 계획하게 된 이유
 저는 어렸을 때부터 머리속으로 이런 저런 생각을 하는 것을 좋아했습니다. 그러다보니 저에게 있어서 생각을 하는 습관은 떼어놓을 수 없는 것이었습니다. 일종의 루틴과도 같다고 볼 수 있다고 생각합니다. 마치 식사를 한 후에 양치를 하는 것과 비슷한 종류인 것입니다. 그러나 다른 평범한 루틴과는 구분되는 차이점이 있습니다. 그 점은 제가 생각한 결과물을 기억하기 어려울 정도로 잦은 빈도로 생각이라는 행위를 반복한다는 점입니다. 이러한 차이점이 무수히 많은 아이디어, 고찰, 성찰들의 의미를 축소시켜버렸습니다. 저는 이러한 생각의 낭비가 굉장히 안타깝다고 느꼈습니다. 지금까지 생각을 함으로써 소모되는 시간과 에너지는 지금보다 더 효율적으로 사용될 수 있음에도 낭비된 것이기 때문입니다. 

 그렇기에 저는 지금까지도 널리 쓰이고 있는 훌륭한 도구인 기록을 활용해야 한다는 결론에 이르게 되었습니다. 그리고 여느때처럼 문득 떠오른 Gymlog는 기록을 작성, 관리하는 것에 있어서 저에게 많은 도움이 될 수 있다고 생각했으며, 이는 Gymlog 프로젝트를 계획하도록 결정하는 것에 영향을 끼쳤습니다. 물론 꼭 제가 만든 어플리케이션이나 프로젝트, 혹은 다른 무언가가 아니어도 기록을 하는 것에 딱히 지장이 있진 않을 것입니다. 심지어는 기능적인 부분에선 다른 상용화된 매체들이 훨씬 효율적일 것입니다. 하지만 다른 효율적인 매체가 있다 한들 그 것은 저에게 Gymlog만한 가치를 느끼게 할 수 없을 것입니다. 왜냐하면 저의 인생에 있어서 중요한 기준인 행복은 항상 정형적인 성취보단 비정형적인 경험이었기 때문입니다. 제게 있어서 Gymlog와 Gymlog 프로젝트를 진행한 경험자체가 어린 시절 느꼈던 따뜻한 비정형적 겸험과 같게 되었으면 좋겠다고 소망하며, 그렇게 믿고 있습니다. 이 것이 Gymlog 프로젝트를 계획하게된 진정한 이유입니다.


## 기술 스택
```JSON
{
    "tech_stacks": [
        {
            "name": "react.js",
            "description": "csr 방식의 spa를 위해 사용됩니다."
        },
        {
            "name": "material ui",
            "description": "material 스타일의 디자인을 위해 사용됩니다."
        }
    ]
}
```

## 요구 사항
- [x] 회원가입
  - [x] 유효성 검사
  - [x] 회원가입 결과에 따른 피드백
- [x] 로그인
  - [x] 유효성 검사
  - [x] 로그인 결과에 따른 피드백
- [x] 글 작성
  - [x] 유효성 검사
  - [x] 작성 결과에 따른 피드백
- [x] 글 삭제
  - [x] 유효성 검사
  - [x] 삭제 결과에 따른 피드백
- [x] 글 수정
  - [x] 유효성 검사
  - [x] 수정 결과에 따른 피드백
- [x] 댓글 작성
  - [x] 유효성 검사
  - [x] 작성 결과에 따른 피드백
- [x] 댓글 삭제
  - [x] 유효성 검사
  - [x] 삭제 결과에 따른 피드백
- [ ] 댓글 수정
  - [ ] 유효성 검사
  - [ ] 수정 결과에 따른 피드백
- [ ] 글 검색
