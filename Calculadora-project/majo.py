usuario= (input("Ingrese usuario:"))
contraseña= (input("Ingrese contraseña:"))
montoDeseado = int(input("Ingrese el monto deseado:"))

usuarioValido= usuario=='prueba1' and contraseña=='1234'
usuarioValido2= usuario=='prueba2' and contraseña=='5678'
usuarioValidoFinal = usuarioValido or usuarioValido2

menorQue20 = montoDeseado < 20
noDivisible = montoDeseado%50!=0 or montoDeseado%100!=0 or montoDeseado%20!=0
siDivisible = montoDeseado%50==0 or montoDeseado%100==0 or montoDeseado%20==0

if(menorQue20):
    print("Monto menor que 20")
elif(noDivisible):
    print("No se puede emitir ese monto con billetes de 20,50,100")
elif(siDivisible):
    print("Si se puede retirar el monto ingresado")


