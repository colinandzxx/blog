import sys
from django.test import TestCase
from django.utils.text import slugify
# from .utils import unique_slug_generator


class testCase1(TestCase):
    def testSlugify(self):

        str = 'this is a test'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

        str = 'This is a test'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

        str = '!@@This is a test!!!'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

        str = '---This is a test -@!!@--'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

        str = '___@#This_is-a test__'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

        str = '!!@#This_is-a test__'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

        str = '--@#This_is-a test_____--'
        r = slugify(str)
        print("{} {}: {}    {}".format(sys._getframe().f_code.co_name,
                                       sys._getframe().f_lineno,
                                       str,
                                       r))

    # def test_unique_slug_generator(self):
    #     str = "this is a test title!!!"
    #     r = unique_slug_generator(str)
    #     print("{} {}: {}".format(sys._getframe().f_code.co_name,
    #                              sys._getframe().f_lineno,
    #                              r))
