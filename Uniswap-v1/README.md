# 유니스왑v1 클론

- CEX: 거래소 서버 내에서 거래 진행
- DEX: AMM(자동 마켓 메이커) 시스템에 따라 거래 진행

### 유니스왑 V1의 주요 구성요소

1. 유동성 공급자(LP)
2. 보상 시스템
3. AMM(Auto Market Maker)
4. 거버넌스 토큰

### AMM과 가격 결정 알고리즘

- CPMM(Constant Product Market Maker) 사용
- x * y = k 공식 적용 (k는 상수)
- 유동성 풀의 크기에 따라 자동으로 가격 결정

### 슬리피지(Slippage)

- 예상 거래 가격과 실제 체결 가격의 차이
- 거래량이 클수록 슬리피지 증가

### LP 토큰

- 유동성 풀 기여도를 나타내는 토큰
- 전체 유동성 대비 개인 지분 증명
- Mint/Burn 기능으로 생성 및 소각

### 비영구적 손실(Impermanent Loss)

- 유동성 풀 내 자산 가치의 변동으로 인한 손실
- 시장 가격 변동에 따른 위험 요소

### Stable coin

1. 법정화폐 담보형
    - USDT, USDC
    - 중앙화된 운영 주체가 담보 보증
    - 운영 재단의 신뢰성 중요
2. 암호화폐 담보형
    - DAI
    - 암호화폐를 담보로 스테이블코인 발행
    - 담보가치 하락 시 청산 위험
3. 알고리즘 담보형
    - UST
    - FRAX (담보+알고리즘 혼합형)

### 스테이킹과 파밍

1. 스테이킹/파밍
    - LP 토큰 스테이킹을 통한 보상
    - 유동성 공급에 대한 인센티브
2. Liquid Staking
    - 스테이킹한 토큰을 활용한 추가 디파이 활동 가능
    - SuperFluid Staking 개념

### ERC20 주요 함수

- transferFrom과 approve가 핵심
- approve로 권한 승인 후 transferFrom으로 전송
- LP 토큰의 mint/burn 기능

### Wrapped Token

- WBTC, WETH 등
- 비트코인과 이더리움을 ERC20 형태로 변환
- 디파이 서비스 구현 단순화

### CSMM(Constant Sum Market Maker)

- x + y = k 공식 사용
- 1:1 비율의 토큰 교환
- 슬리피지 없음
- 간단한 스왑 구현에 적합

