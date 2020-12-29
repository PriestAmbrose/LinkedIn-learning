import unittest
import Calculator

class CalculatorTest(unittest.TestCase):

    def test_run_operation_add(self):
        self.assertEqual(9, Calculator.run_operation(4, 5, '+'))
        self.assertEqual(4.5, Calculator.run_operation(2, 2.5, '+'))
    
    def test_run_operation_subtract(self):
        self.assertEqual(3, Calculator.run_operation(8, 5, '-'))
        self.assertEqual(-0.5, Calculator.run_operation(2, 2.5, '-'))

    def test_run_operation_multiple(self):
        self.assertEqual(9, Calculator.run_operation(3, 3, '*'))
        self.assertEqual(13.5, Calculator.run_operation(3, 4.5, '*'))

    def test_run_operation_divide(self):
        self.assertEqual(2, Calculator.run_operation(10, 5, '/'))
        with self.assertRaises(ZeroDivisionError):
            Calculator.run_operation(9, 0, '/')

    def test_run_operation_modulo(self):
        self.assertEqual(7, Calculator.run_operation(7, 10, '%'))

    def test_run_operation_invalid(self):
        with self.assertRaises(Exception):
            Calculator.run_operation(9,0, '8')

if __name__ == "__main__":
    unittest.main()