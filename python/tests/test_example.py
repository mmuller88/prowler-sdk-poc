import pytest

from poc.example import hello
import prowler_sdk_poc as prowler

# @pytest.mark.parametrize(
#     ("name", "expected"),
#     [
#         ("A. Musing", "Hello A. Musing!"),
#         ("traveler", "Hello traveler!"),
#         ("projen developer", "Hello projen developer!"),
#     ],
# )
# def test_hello(name, expected):
#     """Example test with parametrization."""
#     assert hello(name) == expected

def test_check73():
    """check 73"""
    prowler.Chek73Props
