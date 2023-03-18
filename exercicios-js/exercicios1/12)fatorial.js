function CalcularFatorial(num) {
    if (num == 0) {
        return -1
    } else {
        return num * CalcularFatorial(num -1)
    }
}