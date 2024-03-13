valor_total = Number(prompt('Qual o valor total da compra?'))
forma_pagamento = prompt('Qual será a forma de pagamento?')
tipo_pagamento = prompt('Será à vista ou parcelado?')

if (tipo_pagamento == 'parcelado') {
  parcelas = Number(prompt('Qual será o número de parcelas?'))
}
else {}

dinheiro_vista = valor_total - (valor_total *0.1)
debito_vista = valor_total - (valor_total * 0.08)
credito_vista = valor_total - (valor_total * 0.05)
debito_prazo_ate3 = valor_total
debito_prazo_acima3 = valor_total + (valor_total * 0.04)


if (forma_pagamento == 'dinheiro' && tipo_pagamento == 'à vista') {
  alert('O valor a ser pago será de R$' + dinheiro_vista)
}
else if (forma_pagamento == 'débito' && tipo_pagamento == 'à vista'){
  alert('O valor a ser pago será de R$' + debito_vista)
}
else if (forma_pagamento == 'crédito' && tipo_pagamento == 'à vista'){
  alert('O valor a ser pago será de R$' + credito_vista)
}
else if (forma_pagamento == 'débito' && tipo_pagamento == 'parcelado' && parcelas <= 3){
  alert('Cada parcela custará: R$' + Math.round(debito_prazo_ate3/parcelas))
}
else if (forma_pagamento == 'débito' && tipo_pagamento == 'parcelado' && parcelas > 3){
  alert('Cada parcela custará: R$' + Math.round(debito_prazo_acima3/parcelas))
}