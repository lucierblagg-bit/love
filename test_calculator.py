"""Tests for the calculator module."""

import pytest
from calculator import add, subtract, multiply, divide, is_even, factorial


class TestAdd:
    def test_positive_numbers(self):
        assert add(2, 3) == 5

    def test_negative_numbers(self):
        assert add(-1, -2) == -3

    def test_mixed_numbers(self):
        assert add(-1, 3) == 2

    def test_floats(self):
        assert add(1.5, 2.5) == 4.0


class TestSubtract:
    def test_positive_numbers(self):
        assert subtract(5, 3) == 2

    def test_result_negative(self):
        assert subtract(3, 5) == -2


class TestMultiply:
    def test_positive_numbers(self):
        assert multiply(3, 4) == 12

    def test_by_zero(self):
        assert multiply(5, 0) == 0


class TestDivide:
    def test_normal(self):
        assert divide(10, 2) == 5.0

    def test_float_result(self):
        assert divide(7, 2) == 3.5

    def test_divide_by_zero(self):
        with pytest.raises(ValueError, match="Cannot divide by zero"):
            divide(1, 0)


class TestIsEven:
    def test_even(self):
        assert is_even(4) is True

    def test_odd(self):
        assert is_even(3) is False

    def test_zero(self):
        assert is_even(0) is True


class TestFactorial:
    def test_zero(self):
        assert factorial(0) == 1

    def test_positive(self):
        assert factorial(5) == 120

    def test_one(self):
        assert factorial(1) == 1

    def test_negative(self):
        with pytest.raises(ValueError, match="not defined for negative"):
            factorial(-1)
