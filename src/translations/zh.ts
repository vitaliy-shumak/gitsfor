import { LangType } from '.';

export const zh: LangType = {
    'page.header.navbar.signIn': '登录',
    'page.header.navbar.trade': '交易',
    'page.header.navbar.wallets':'钱包',
    'page.header.navbar.openOrders':'打开订单',
    'page.header.navbar.history':'历史',

    'page.header.navbar.profile': '个人资料',
    'page.header.navbar.kyc':'KYC',
    'page.header.navbar.logout':'退出',

    'page.body.trade.header.markets':'市场',
    'page.body.trade.header.markets.content.pair':'配对',
    'page.body.trade.header.markets.content.price':'价格',
    'page.body.trade.header.markets.content.change': '24h Change',
    'page.body.trade.header.markets.content.search':'搜索',

    'page.body.trade.header.newOrder':'插入新订单',
    'page.body.trade.header.newOrder.content.tabs.buy': '购买',
    'page.body.trade.header.newOrder.content.tabs.sell': '卖',
    'page.body.trade.header.newOrder.content.orderType':'订单类型',
    'page.body.trade.header.newOrder.content.orderType.limit':'限制',
    'page.body.trade.header.newOrder.content.orderType.market':'市场',
    'page.body.trade.header.newOrder.content.price': '价格',
    'page.body.trade.header.newOrder.content.amount': '金额',
    'page.body.trade.header.newOrder.content.total': '总计',
    'page.body.trade.header.newOrder.content.available': 'Available',
    'page.body.trade.header.newOrder.content.estimatedFee': 'Estimated Fee',

    'page.body.trade.header.marketDepths': 'Market Depths',
    'page.body.trade.header.marketDepths.content.price': '价格',
    'page.body.trade.header.marketDepths.content.volume': 'Volume:',
    'page.body.trade.header.marketDepths.content.cumulativeVolume': 'Cumulative Volume:',
    'page.body.trade.header.marketDepths.content.cumulativeValue': 'Cumulative Value:',

    'page.body.trade.header.asks': 'Asks',
    'page.body.trade.header.bids': 'Bids',
    'page.body.trade.orderbook.header.price': '价格',
    'page.body.trade.orderbook.header.amount': '金额',
    'page.body.trade.orderbook.header.volume': 'Volume',

    'page.body.trade.header.recentTrades': 'Recent Trades',
    'page.body.trade.header.recentTrades.content.time': 'Time',
    'page.body.trade.header.recentTrades.content.price': '价格',
    'page.body.trade.header.recentTrades.content.amount': '金额',

    'page.body.trade.header.openOrders':'打开订单',
    'page.body.trade.header.openOrders.content.date':'日期',
    'page.body.trade.header.openOrders.content.action':'行动',
    'page.body.trade.header.openOrders.content.state':'状态',
    'page.body.trade.header.openOrders.content.state.wait': 'wait',
    'page.body.trade.header.openOrders.content.price': '价格',
    'page.body.trade.header.openOrders.content.amount': '金额',
    'page.body.trade.header.openOrders.content.total': '总计',
    'page.body.trade.header.openOrders.content.filled': 'Filled',
    'page.body.trade.header.openOrders.content.ask': 'Ask',
    'page.body.trade.header.openOrders.content.bid': 'Bid',

    'page.body.wallets.locked':'已锁定',
    'page.body.wallets.balance': 'Balance',
    'page.body.wallets.tabs.deposit':'存款',
    'page.body.wallets.tabs.deposit.ccy.message.submit':'请使用其中一个提交存款付款以下选项。您的存款将反映在您的6号帐户确认中',
    'page.body.wallets.tabs.deposit.ccy.message.address':'钱包地址存款',
    'page.body.wallets.tabs.deposit.ccy.message.button': 'COPY',

    'page.body.wallets.tabs.deposit.fiat.message1': 'You can deposit in bank on this credential',
    'page.body.wallets.tabs.deposit.fiat.message2': 'Please use information below to complete you bank payment. Your deposit will be reflected in your account within two business days.',
    'page.body.wallets.tabs.deposit.fiat.bankName': 'Bank Name:',
    'page.body.wallets.tabs.deposit.fiat.accountNumber': 'Account number:',
    'page.body.wallets.tabs.deposit.fiat.accountName': 'Account name:',
    'page.body.wallets.tabs.deposit.fiat.phoneNumber': '电话号码:',
    'page.body.wallets.tabs.deposit.fiat.referenceCode': 'Your reference code:',
    'page.body.wallets.table.pending': 'Pending',
    'page.body.wallets.tabs.deposit.fiat.admin': ' If you want to make fiat withdraw, please contact administrator!',

    'page.body.wallets.tabs.withdraw':'撤回',
    'page.body.wallets.tabs.withdraw.content.address':'撤回地址',
    'page.body.wallets.tabs.withdraw.content.amount':'提款金额',
    'page.body.wallets.tabs.withdraw.content.code2fa': '6位Google身份验证器代码',
    'page.body.wallets.tabs.withdraw.content.fee':'费用',
    'page.body.wallets.tabs.withdraw.content.total':'总提款金额',
    'page.body.wallets.tabs.withdraw.content.button':'撤回',
    'page.body.wallets.tabs.withdraw.content.addressPlaceholder': '地址',

    'page.body.wallets.tabs.withdraw.modal.confirmation': 'Confirmation',
    'page.body.wallets.tabs.withdraw.modal.message1': 'You are withdrawing',
    'page.body.wallets.tabs.withdraw.modal.message2': 'on address. Are you sure?',
    'page.body.wallets.tabs.withdraw.modal.button.cancel': 'Cancel',
    'page.body.wallets.tabs.withdraw.modal.button.withdraw':'撤回',

    'page.body.wallets.tabs.withdraw.content.enable2fa': 'You should enable 2fa for having abitity to withdraw!',
    'page.body.wallets.tabs.withdraw.content.enable2faButton': 'Enable 2fa',

    'page.body.openOrders.header.orderType':'订单类型',
    'page.body.openOrders.header.orderType.buy.market': 'Buy / market',
    'page.body.openOrders.header.orderType.buy.limit': 'Buy / limit',
    'page.body.openOrders.header.orderType.sell.market': 'Sell / market',
    'page.body.openOrders.header.orderType.sell.limit': 'Sell / limit',
    'page.body.openOrders.header.pair': '配对',
    'page.body.openOrders.header.amount': '金额',
    'page.body.openOrders.header.price': '价格',
    'page.body.openOrders.header.executed': 'Executed',
    'page.body.openOrders.header.remaining': 'Remaining',
    'page.body.openOrders.header.costRemaining': 'Cost Remaining',
    'page.body.openOrders.header.status':'状态',
    'page.body.openOrders.content.status.done': 'Done',
    'page.body.openOrders.content.status.wait': 'Wait',
    'page.body.openOrders.content.status.cancel': 'Cancel',
    'page.body.openOrders.header.button.cancelAll': 'Cancel all',

    'page.body.history.deposit': 'Deposit History',
    'page.body.history.deposit.header.txid': 'TXID',
    'page.body.history.deposit.header.date':'日期',
    'page.body.history.deposit.header.currency': 'Currency',
    'page.body.history.deposit.header.amount': '金额',
    'page.body.history.deposit.header.status':'状态',
    'page.body.history.deposit.content.status.accepted': 'Accepted',
    'page.body.history.deposit.content.status.collected': 'Collected',
    'page.body.history.deposit.content.status.submitted': 'Submitted',
    'page.body.history.deposit.content.status.canceled': 'Canceled',
    'page.body.history.deposit.content.status.rejected': 'Rejected',
    'page.body.history.deposit.content.status.skipped': 'Skipped',

    'page.body.history.withdraw': 'Withdraw History',
    'page.body.history.withdraw.header.id': 'ID',
    'page.body.history.withdraw.header.date':'日期',
    'page.body.history.withdraw.header.currency': 'Currency',
    'page.body.history.withdraw.header.address': '地址',
    'page.body.history.withdraw.header.amount': '金额',
    'page.body.history.withdraw.header.fee':'费用',
    'page.body.history.withdraw.header.status':'状态',
    'page.body.history.withdraw.content.status.prepared': 'Prepared',
    'page.body.history.withdraw.content.status.submitted': 'Submitted',
    'page.body.history.withdraw.content.status.canceled': 'Canceled',
    'page.body.history.withdraw.content.status.accepted': 'Accepted',
    'page.body.history.withdraw.content.status.suspected': 'Suspected',
    'page.body.history.withdraw.content.status.rejected': 'Rejected',
    'page.body.history.withdraw.content.status.processing': 'Processing',
    'page.body.history.withdraw.content.status.succeed': 'Succeed',
    'page.body.history.withdraw.content.status.failed': 'Failed',
    'page.body.history.withdraw.content.status.confirming': 'Confirming',

    'page.body.history.trade': 'Trade History',
    'page.body.history.trade.header.id': 'ID',
    'page.body.history.trade.header.date':'日期',
    'page.body.history.trade.header.side': '侧',

    'page.body.history.trade.content.side.buy': '购买',
    'page.body.history.trade.content.side.sell': '卖',

    'page.body.history.trade.header.market':'市场',
    'page.body.history.trade.header.price': '价格',
    'page.body.history.trade.header.funds': 'Funds',
    'page.body.history.trade.header.amount': '金额',
    'page.body.history.trade.header.balance': 'Balance',

    'page.body.profile.header.account': 'Account',

    'page.body.profile.header.account.content.password': '密码',
    'page.body.profile.header.account.content.password.button.change': '改变',
    'page.body.profile.header.account.content.password.old': '旧密码',
    'page.body.profile.header.account.content.password.new': '新密码',
    'page.body.profile.header.account.content.password.button.save': 'Save',
    'page.body.profile.header.account.content.password.button.cancel': 'Cancel',

    'page.body.profile.header.account.content.twoFactorAuthentication': '双因素身份验证',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.enable': '2FA - Enabled',
    'page.body.profile.header.account.content.twoFactorAuthentication.message.disable': '2FA - Disabled',
    'page.body.profile.header.account.content.twoFactorAuthentication.header': 'Enable two factor authentication',
    'page.body.profile.header.account.content.twoFactorAuthentication.subHeader': '6位Google身份验证器代码',
    'page.body.profile.header.account.content.twoFactorAuthentication.enable': 'ENABLE 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.disable': 'DISABLE 2FA',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalBody': 'Please сontact administrator to disable it.',
    'page.body.profile.header.account.content.twoFactorAuthentication.modalHeader': 'Two-factor authentication is enabled',
    'page.body.profile.header.account.content.twoFactorAuthentication.info': 'This is your secret code that can be used to get access to your' +
        '2fa code from different devices and to restore access if your device was lost.' +
        'Be sure to save the code',

    'page.body.profile.header.account.profile': '个人资料验证',
    'page.body.profile.header.account.profile.email.title': 'Email verified',
    'page.body.profile.header.account.profile.email.message': '不允许存款和取款',
    'page.body.profile.header.account.profile.phone.unverified.title': '手机验证',
    'page.body.profile.header.account.profile.phone.title': 'Phone verified',
    'page.body.profile.header.account.profile.phone.message': '允许存款和交易',
    'page.body.profile.header.account.profile.identity.unverified.title': '手机验证',
    'page.body.profile.header.account.profile.identity.title': 'Identity verified',
    'page.body.profile.header.account.profile.identity.message': '允许提款',

    'page.body.profile.header.accountActivity': '帐户活动',
    'page.body.profile.header.accountActivity.content.date':'日期',
    'page.body.profile.header.accountActivity.content.addressip': '地址IP',
    'page.body.profile.header.accountActivity.content.action':'行动',
    'page.body.profile.header.accountActivity.content.result': 'Result',
    'page.body.profile.header.accountActivity.content.userAgent': 'User Agent',

    'page.body.profile.content.action.login': 'Login',
    'page.body.profile.content.action.logout': '退出',
    'page.body.profile.content.action.request2fa': 'Request QR code for 2FA',
    'page.body.profile.content.action.enable2fa': 'Enable 2FA',
    'page.body.profile.content.action.login.2fa': 'Login with 2FA',
    'page.body.profile.content.action.requestPasswordReset': 'Request password reset',
    'page.body.profile.content.action.passwordReset': 'Password reset',

    'page.body.profile.content.result.succeed': 'Succeed',
    'page.body.profile.content.result.failed': 'Failed',

    'page.body.kyc.phone.head': 'Let`s verify your phone',
    'page.body.kyc.phone.enterPhone': 'Enter your phone number',
    'page.body.kyc.phone.phoneNumber': '电话号码',
    'page.body.kyc.phone.enterCode': 'Enter code that you received',
    'page.body.kyc.phone.code': 'SMS Code',
    'page.body.kyc.phone.send': '发送代码',
    'page.body.kyc.phone.resend': '重新发送代码',
    'page.body.kyc.identity.firstName': '名字',
    'page.body.kyc.identity.lastName': '姓氏',
    'page.body.kyc.identity.dateOfBirth': 'Date of Birth DD/MM/YYYY',
    'page.body.kyc.identity.residentialAddress': '住址',
    'page.body.kyc.identity.city': '城市',
    'page.body.kyc.identity.postcode': '邮政编码',
    'page.body.kyc.documents.expiryDate': 'Expiry Date DD/MM/YYYY',
    'page.body.kyc.documents.drag': '拖放或浏览文件',
    'page.body.kyc.documents.maxFile': '最大文件大小为20MB',
    'page.body.kyc.documents.maxNum': '最大文件数为5',
    'page.body.kyc.documents.upload': 'Upload your ID Photo',
    'page.body.kyc.documents.select.passport': '护照',
    'page.body.kyc.documents.select.identityCard': '身份证',
    'page.body.kyc.documents.select.driverLicense': '驾驶执照',
    'page.body.kyc.documents.select.utilityBill': '效用法案',
    'page.body.kyc.documents.number': ': 数字',

    'page.body.kyc.next': '下一步',
    'page.body.kyc.head.phone': '手机验证',
    'page.body.kyc.head.identity': '身份验证',
    'page.body.kyc.head.document': 'Document Verification',

    'page.footer.legalDocuments':'法律文件',
    'page.footer.faq':'常见问题',
    'page.footer.language':'语言',

    'page.header.signIn': '登录',
    'page.header.signIn.email': '电子邮件',
    'page.header.signIn.password': '密码',
    'page.header.signIn.receiveConfirmation': 'Didn\'t receive your confirmation email?',
    'page.header.signIn.forgotPassword': 'Forgot your password?',
    'page.header.signIn.createAccount': 'Create an account?',

    'page.header.signUp': '注册',
    'page.header.signUp.email': '电子邮件',
    'page.header.signUp.password': '密码',
    'page.header.signUp.confirmPassword': '确认密码',
    'page.header.signUp.referalCode': '可选的引荐代码',
    'page.header.signUp.terms': '我同意服务方面的所有陈述',
    'page.header.signUp.modal.header': 'VERIFY YOUR EMAIL ADDRESS',
    'page.header.signUp.modal.body': 'To complete the registration look for an' +
        'email in your inbox that provides further' +
        'instruction. If you cannot find the email,' +
        'please check your spam email',

    'page.resendConfirmation': 'Resend Confirmation',
    'page.forgotPassword': '忘记密码',
    'page.forgotPassword.email': '电子邮件',
    'page.forgotPassword.send': '发送',
    'page.noDataToShow':'没有要显示的数据...',

    'page.modal.withdraw.success':'成功！',
    'page.modal.withdraw.success.message.content': 'Your withdrawal has been submitted successfully. Please wait to receive' +
        ' few mandatory confirmations for the completion of this transaction.',
    'page.modal.withdraw.success.button': 'OK',
};